#!/usr/bin/env bash
#
# Installs Caddy with the Cloudflare DNS module on a Linux box and wires it to the
# Caddyfile in this repo. Idempotent: safe to re-run after editing the Caddyfile
# or bumping Caddy.
#
#   sudo ./src/server/infra/install-caddy.sh
#
# See ./README.md for the router forward and Cloudflare token this depends on.
set -euo pipefail

INFRA_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CADDY_BIN=/usr/local/bin/caddy
CADDY_ETC=/etc/caddy
CADDY_MODULE=github.com/caddy-dns/cloudflare

if [[ "$(id -u)" -ne 0 ]]; then
  echo "Run as root: sudo $0" >&2
  exit 1
fi

case "$(uname -m)" in
  x86_64) ARCH=amd64 ;;
  aarch64 | arm64) ARCH=arm64 ;;
  armv7l) ARCH=arm ;;
  *) echo "Unsupported architecture: $(uname -m)" >&2; exit 1 ;;
esac

# The stock Caddy binary has no DNS providers compiled in, so pull a custom build
# with the Cloudflare module from Caddy's download API. No Go toolchain needed.
echo "==> Downloading Caddy ($ARCH) with $CADDY_MODULE"
TMP_BIN="$(mktemp)"
trap 'rm -f "$TMP_BIN"' EXIT
curl -fsSL --output "$TMP_BIN" \
  "https://caddyserver.com/api/download?os=linux&arch=${ARCH}&p=${CADDY_MODULE}"
chmod 0755 "$TMP_BIN"

if ! "$TMP_BIN" list-modules | grep -q '^dns.providers.cloudflare$'; then
  echo "Downloaded binary is missing dns.providers.cloudflare" >&2
  exit 1
fi

# Rename over the old binary rather than writing in place: Linux returns ETXTBSY
# when writing to the image of a running process, which a re-run would hit.
install -m 0755 "$TMP_BIN" "${CADDY_BIN}.new"
mv -f "${CADDY_BIN}.new" "$CADDY_BIN"
echo "==> Installed $("$CADDY_BIN" version | head -1)"

echo "==> Creating caddy user and directories"
if ! id caddy &>/dev/null; then
  NOLOGIN=/usr/sbin/nologin
  [[ -x "$NOLOGIN" ]] || NOLOGIN=/sbin/nologin
  [[ -x "$NOLOGIN" ]] || NOLOGIN=/bin/false
  groupadd --system caddy
  useradd --system --gid caddy --create-home --home-dir /var/lib/caddy \
    --shell "$NOLOGIN" --comment "Caddy web server" caddy
fi
install -d -o caddy -g caddy -m 0750 /var/lib/caddy /var/log/caddy
install -d -m 0755 "$CADDY_ETC"

# Symlink rather than copy, so the repo stays the source of truth for the config
# and `git pull` + `systemctl reload caddy` is the whole update path.
echo "==> Linking $CADDY_ETC/Caddyfile -> $INFRA_DIR/Caddyfile"
ln -sfn "$INFRA_DIR/Caddyfile" "$CADDY_ETC/Caddyfile"

TOKEN_MISSING=0
if [[ ! -f "$CADDY_ETC/caddy.env" ]]; then
  echo "==> Seeding $CADDY_ETC/caddy.env from caddy.env.example"
  install -o caddy -g caddy -m 0600 "$INFRA_DIR/caddy.env.example" "$CADDY_ETC/caddy.env"
  TOKEN_MISSING=1
elif grep -q '^CLOUDFLARE_API_TOKEN=replace-me$' "$CADDY_ETC/caddy.env"; then
  TOKEN_MISSING=1
fi

echo "==> Installing systemd unit"
install -m 0644 "$INFRA_DIR/caddy.service" /etc/systemd/system/caddy.service
systemctl daemon-reload

# Validation has to come after the token check, not before it: `caddy validate`
# provisions every module, and the Cloudflare DNS provider rejects a placeholder
# token outright ("API token 'replace-me' appears invalid"). Validating first
# would abort the script under `set -e` before printing the instructions below.
if [[ "$TOKEN_MISSING" -eq 1 ]]; then
  cat <<MSG

Caddy is installed but NOT started, and the config was NOT validated:
$CADDY_ETC/caddy.env still has the placeholder token.

Add a Cloudflare API token with Zone/DNS/Edit and Zone/Zone/Read on
ageofmicro.com, then re-run this script (which will validate and start), or do it
by hand:

  sudo systemctl enable --now caddy
  journalctl -u caddy -f
MSG
  exit 0
fi

# Validate with the same environment the unit will run with, so the {$VAR}
# placeholders in the Caddyfile resolve the way they will in production.
echo "==> Validating config"
set -a
# shellcheck disable=SC1091
. "$CADDY_ETC/caddy.env"
set +a
"$CADDY_BIN" validate --config "$CADDY_ETC/Caddyfile"

if systemctl is-active --quiet caddy; then
  echo "==> Reloading config"
  systemctl reload caddy
  echo
  echo "Config reloaded. The binary on disk was updated too, but the running process"
  echo "is still the old one. Restart when dropping live connections is acceptable:"
  echo
  echo "  sudo systemctl restart caddy"
else
  echo "==> Enabling and starting caddy"
  systemctl enable --now caddy
fi
systemctl --no-pager --lines=20 status caddy
