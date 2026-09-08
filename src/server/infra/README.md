# Server infra

TLS termination and process supervision for a self-hosted game server.

## Architecture

The site is reachable on two hostnames:

- `ageofmicro.com` is served through a CDN, which terminates TLS at its edge.
- `direct.ageofmicro.com` resolves straight to the origin host, bypassing the CDN.
  Nothing in front of it terminates TLS, so the origin has to.

Caddy provides that termination and reverse proxies to the game server:

```
client --tcp/443--> [port mapping] --> caddy :3001 --> game server :3000
                                        |
                        TLS terminates here; certificate from
                        Let's Encrypt via the ACME DNS-01 challenge
```

Caddy listens on **3001**, not 443, so it needs no privileged bind and does not
contend with anything else on the standard port; inbound 443 is mapped to it
externally. Certificates are issued over **DNS-01**, so no inbound port is needed
for issuance or renewal — only API credentials for the DNS zone.

Two services, deliberately at different privilege levels:

| Service              | Kind        | Runs as       | Listens | Purpose                          |
| -------------------- | ----------- | ------------- | ------- | -------------------------------- |
| `micromania.service` | user unit   | checkout user | `:3000` | The deno game server             |
| `caddy.service`      | system unit | `caddy`       | `:3001` | TLS termination + reverse proxy  |

The game server needs no root and runs as the user owning the checkout and its
`.env`. Caddy is a system unit because it installs a binary under `/usr/local/bin`
and holds ACME credentials under `/etc/caddy`. The CDN-served hostname does not
pass through Caddy and is unaffected by anything here.

## Files

| File                     | Purpose                                                          |
| ------------------------ | ---------------------------------------------------------------- |
| `micromania.service`     | Game server unit. Symlinked into `~/.config/systemd/user`.        |
| `install-micromania.sh`  | Installs the above. Run as the checkout user, **not** root.       |
| `Caddyfile`              | Caddy config. Copied to `/etc/caddy/Caddyfile` by the installer.  |
| `caddy.service`          | Caddy unit, installed to `/etc/systemd/system`.                   |
| `caddy.env.example`      | Template for `/etc/caddy/caddy.env`. Holds the DNS API token.     |
| `install-caddy.sh`       | Installs the Caddy binary, service user, directories and config.  |

## Requirements

1. Linux with systemd. The Caddy installer detects `amd64`, `arm64` and `arm`.
2. Inbound TCP **443** mapped to port **3001** on the host.
3. An **A record** for `direct.ageofmicro.com` pointing at the host's public
   address, served directly rather than through the CDN proxy.
4. A **Cloudflare API token** scoped to the zone, with:
   - `Zone` / `DNS` / **`Edit`** — writes the `_acme-challenge` TXT record
   - `Zone` / `Zone` / **`Read`** — resolves the zone by name

   The "Edit zone DNS" template grants exactly this. No paid CDN plan is involved:
   the certificate comes from Let's Encrypt, and the API token only writes one
   temporary DNS record per issuance.
5. Lingering enabled for the checkout user, so the game server starts at boot
   without a login: `sudo loginctl enable-linger <user>`.

## Install

### Game server

```sh
./src/server/infra/install-micromania.sh     # as the checkout user, no sudo
systemctl --user status micromania
journalctl --user -u micromania -f
```

Environment (telemetry credentials) comes from the repo's `.env`, loaded by deno's
`--env-file`, not from systemd. A credential change is `.env` plus
`systemctl --user restart micromania`, with nothing to change in the unit.

### Caddy

```sh
sudo ./src/server/infra/install-caddy.sh
```

This downloads a Caddy build with the `caddy-dns/cloudflare` module compiled in
(the stock binary has no DNS providers), creates the `caddy` system user and its
directories, copies in the config, and installs the unit. On first run it seeds
`/etc/caddy/caddy.env` from the example and stops without validating — validation
provisions the DNS module, which rejects a placeholder token.

Add the token to `/etc/caddy/caddy.env`, then either re-run the installer, or:

```sh
sudo systemctl enable --now caddy
journalctl -u caddy -f
```

First issuance takes 30-90s while the TXT record propagates; look for
`certificate obtained successfully`. Renewal is automatic and needs no inbound
ports.

## Configuration

`/etc/caddy/caddy.env`, mode `0600`, owned by `caddy`. systemd parses it, so use
plain `KEY=value` with no quoting or shell expansion.

| Variable               | Default          | Purpose                                     |
| ---------------------- | ---------------- | ------------------------------------------- |
| `CLOUDFLARE_API_TOKEN` | required         | ACME DNS-01 credential                      |
| `MICROMANIA_UPSTREAM`  | `127.0.0.1:3000` | Where the game server listens               |
| `CADDY_HTTPS_PORT`     | `3001`           | Must match the inbound 443 mapping          |

## Updating

```sh
git pull
systemctl --user restart micromania                      # rebundles the client on boot
sudo ./src/server/infra/install-caddy.sh --config-only    # only if the Caddyfile changed
```

`--config-only` copies the Caddyfile and reloads, skipping the binary download.
Caddy `reload` is graceful and does not drop in-flight websockets; `restart` does.
Restarting the game server always disconnects players, since game state lives in
the process.

The game server unit is symlinked from the repo, so `git pull` picks it up. The
Caddyfile is **copied** instead: Caddy runs as its own user, which cannot traverse
a checkout under a private (mode `0700`) home directory, and a symlink there fails
with `open /etc/caddy/Caddyfile: permission denied`. Editing the repo Caddyfile and
running only `systemctl reload caddy` therefore reloads the *old* config — use
`--config-only`.

## Verify

```sh
curl -sv https://direct.ageofmicro.com/ -o /dev/null
```

Expect `TLS certificate verify ok`, a Let's Encrypt issuer, and `200`.

Websocket path — socket.io is configured for the websocket transport only, so this
is the one that matters for gameplay:

```sh
curl -sv -o /dev/null -H 'Connection: Upgrade' -H 'Upgrade: websocket' \
  -H 'Sec-WebSocket-Version: 13' -H 'Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==' \
  'https://direct.ageofmicro.com/socket.io/?EIO=4&transport=websocket'
```

Expect `101 Switching Protocols`.

To test the inbound port mapping before Caddy exists, run any listener on the
Caddy port and request the public address from off-network:

```sh
python3 -m http.server 3001
```

## Design notes

- **No port 80 listener.** DNS-01 issuance never needs an HTTP challenge, so
  `auto_https disable_redirects` is set. Without it Caddy binds port 80 to serve
  HTTP→HTTPS redirects and exits as an unprivileged user.
- **No HTTP/3.** Caddy would advertise `Alt-Svc` on its own port, which is not the
  port clients connect to. Enabling it properly needs the UDP 443 mapping too.
- **No `/ping` shortcut in Caddy.** The client picks a server by timing
  `GET /ping` against each host (`src/client/servers/regionalServers.ts`); neither
  host has a real `/ping` route, so both fall through to the full HTML page.
  Answering it cheaply at the proxy would make the direct host look artificially
  faster and bias server selection.
- **`X-Forwarded-For` is replaced, not appended.** The server trusts the left most
  entry (`src/server/utils/clientAddress.ts`), which a client could otherwise
  forge by sending its own header. Verified: a request carrying
  `X-Forwarded-For: 1.2.3.4-SPOOFED` reaches the upstream as the real peer
  address. Caddy logs `Unnecessary header_up X-Forwarded-For` at startup — that
  warning does not apply to this use, since Caddy's default *appends* to a
  client-supplied value. Leave the directive in place.
- **The token stays out of the repo,** living only in `/etc/caddy/caddy.env`. The
  Caddy unit omits the `--environ` flag that the upstream unit passes, since that
  prints the environment, token included, into the journal.
- **`caddy validate` runs as root**, which provisions the file logger and leaves
  the log root-owned; the installer hands `/var/log/caddy` and `/var/lib/caddy`
  back to the `caddy` user afterwards.
