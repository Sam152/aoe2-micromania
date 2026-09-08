#!/usr/bin/env bash
#
# Installs the game server as a systemd *user* unit, pointing at the unit file in
# this repo. Run as the owning user, NOT with sudo:
#
#   ./src/server/infra/install-micromania.sh
#
# Idempotent. Adopting an existing hand-installed unit is safe: the file is
# replaced with a symlink to the repo copy, which is byte identical.
set -euo pipefail

INFRA_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
UNIT_DIR="${XDG_CONFIG_HOME:-$HOME/.config}/systemd/user"
UNIT=micromania.service

if [[ "$(id -u)" -eq 0 ]]; then
  echo "Do not run this as root. User units belong to the user running the server." >&2
  exit 1
fi

if ! systemctl --user show-environment &>/dev/null; then
  echo "No systemd user session available. Log in as this user over SSH (not su) and retry." >&2
  exit 1
fi

echo "==> Linking $UNIT_DIR/$UNIT -> $INFRA_DIR/$UNIT"
mkdir -p "$UNIT_DIR"
ln -sfn "$INFRA_DIR/$UNIT" "$UNIT_DIR/$UNIT"

echo "==> Reloading and enabling"
systemctl --user daemon-reload
systemctl --user enable "$UNIT"

if systemctl --user is-active --quiet "$UNIT"; then
  echo "==> Restarting to pick up the unit"
  systemctl --user restart "$UNIT"
else
  systemctl --user start "$UNIT"
fi

# Without lingering the unit stops when the last session for this user ends, and
# does not come back at boot. Setting it needs root, so only report the state.
if ! loginctl show-user "$USER" 2>/dev/null | grep -q '^Linger=yes'; then
  cat <<MSG

WARNING: lingering is off for $USER, so this service will stop when your last
session ends and will not start at boot. Enable it with:

  sudo loginctl enable-linger $USER
MSG
fi

systemctl --user --no-pager --lines=20 status "$UNIT"
