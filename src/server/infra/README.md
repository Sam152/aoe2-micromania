# Server infra: `deathstar`

Everything needed to run the game server and terminate TLS for it on the box.

The box is `deathstar` (`ssh deathstar`): Debian 13 trixie, aarch64, repo checked
out at `/home/sam/micromania`. Two services:

| Service              | Kind        | Runs as | Listens | Purpose                     |
| -------------------- | ----------- | ------- | ------- | --------------------------- |
| `micromania.service` | user unit   | `sam`   | `:3000` | The deno game server        |
| `caddy.service`      | system unit | `caddy` | `:3001` | TLS termination for `direct.ageofmicro.com` |

`ageofmicro.com` is proxied by Cloudflare, which terminates TLS for it.
`direct.ageofmicro.com` is unproxied, so Caddy terminates that one on the box:

```
browser --tcp/443--> router --forward--> caddy :3001 --> deno :3000
                                          ^
                          TLS terminates here, cert from Let's Encrypt
```

Nothing here touches the Cloudflare path. `ageofmicro.com` keeps hitting whatever
origin it hits today, and port 80 keeps whatever forward it has.

## Files

| File                     | Purpose                                                    |
| ------------------------ | ---------------------------------------------------------- |
| `micromania.service`     | Game server unit. Symlinked into `~/.config/systemd/user`.  |
| `install-micromania.sh`  | Installs the above. Run as `sam`, **not** root.             |
| `Caddyfile`              | Caddy config. Symlinked to `/etc/caddy/Caddyfile`.          |
| `caddy.service`          | Caddy unit, installed to `/etc/systemd/system`.             |
| `caddy.env.example`      | Template for `/etc/caddy/caddy.env` (holds the CF token).    |
| `install-caddy.sh`       | Installs the Caddy binary, user, dirs, unit and symlink.    |

Both installers symlink rather than copy, so this repo stays the source of truth
and `git pull` + a reload is the whole update path.

## Why the privilege split

The game server is a **user** unit with `Linger=yes`: it needs no root, and runs
as the user that owns the checkout and the `.env`. Caddy is a **system** unit
because it installs a binary into `/usr/local/bin` and holds the ACME token in
`/etc/caddy`. Keep them separate — `install-micromania.sh` refuses to run as root
and `install-caddy.sh` requires it.

## Game server

```sh
./src/server/infra/install-micromania.sh          # as sam, no sudo
systemctl --user status micromania
journalctl --user -u micromania -f
```

Environment (OTEL credentials) comes from the repo's `.env`, loaded by deno's
`--env-file` via `.hooks/start-forever.ts` — not from systemd. So a credential
change is `.env` + `systemctl --user restart micromania`, with nothing to touch in
the unit.

## Caddy

### Prerequisites

1. **Router forward:** WAN TCP `443` → `deathstar:3001`. Caddy listens on 3001 so
   it needs no privileged bind and does not collide with the Orbi's own HTTPS
   admin page, which used to answer on WAN 443.
2. **DNS:** `direct.ageofmicro.com` A record → WAN IP, grey cloud (DNS only).
   Already the case.
3. **Cloudflare API token** with these permissions on `ageofmicro.com`, from
   <https://dash.cloudflare.com/profile/api-tokens>:
   - Zone / DNS / **Edit** — writes the `_acme-challenge` TXT record
   - Zone / Zone / **Read** — looks the zone up by name

### Install

```sh
sudo ./src/server/infra/install-caddy.sh
```

The script downloads a Caddy build with the `caddy-dns/cloudflare` module baked in
(the stock binary has no DNS providers compiled in), creates the `caddy` system
user, symlinks the Caddyfile out of this repo, and installs the unit. On first run
it seeds `/etc/caddy/caddy.env` from the example and stops there without
validating — `caddy validate` provisions the Cloudflare module, which rejects a
placeholder token. Fill in the token, then either re-run the installer (it
validates and starts once a real token is present) or:

```sh
sudo systemctl enable --now caddy
journalctl -u caddy -f
```

First issuance takes 30-90s: Caddy writes a TXT record, waits for propagation, and
completes the challenge. Renewals happen automatically and need no inbound ports.

## Deploying a change

```sh
ssh deathstar
cd micromania && git pull
systemctl --user restart micromania    # game server: rebundles client on boot
sudo systemctl reload caddy            # only if the Caddyfile changed
```

Caddy `reload` is graceful and does not drop in-flight websockets; `restart` does.
Restarting `micromania` always drops connected players, since the game state lives
in the process.

## Verify

From outside the network (phone on cellular, or a remote shell):

```sh
curl -sv https://direct.ageofmicro.com/ -o /dev/null
```

Expect `TLS certificate verify ok` with a Let's Encrypt issuer and a `200`. From
inside the LAN, NAT hairpin makes the same command work; if the router does not
hairpin, hit Caddy directly:

```sh
curl -sv --resolve direct.ageofmicro.com:3001:<deathstar-lan-ip> \
  https://direct.ageofmicro.com:3001/ -o /dev/null
```

Websocket path (socket.io runs websocket-only transport, so this is the one that
matters for gameplay):

```sh
curl -sv -o /dev/null -H 'Connection: Upgrade' -H 'Upgrade: websocket' \
  -H 'Sec-WebSocket-Version: 13' -H 'Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==' \
  'https://direct.ageofmicro.com/socket.io/?EIO=4&transport=websocket'
```

Expect `101 Switching Protocols`.

To test the router forward alone, before Caddy exists, put any listener on 3001 on
the box and curl the public IP from off-network:

```sh
python3 -m http.server 3001    # on deathstar
```

## Decisions worth knowing

- **No port 80 listener.** DNS-01 issuance means Caddy never needs an HTTP
  challenge, so `auto_https disable_redirects` is set. Without it Caddy binds port
  80 for HTTP→HTTPS redirects and dies as an unprivileged user. If you later want
  a redirect, repoint the router's WAN 80 forward at Caddy and add a
  `http://direct.ageofmicro.com` site block on a high port.
- **No HTTP/3.** Caddy would advertise `Alt-Svc` on its own port (3001), which is
  not the port clients reach the box on. Enabling it properly needs a UDP 443 →
  3001 forward as well.
- **No `/ping` shortcut in Caddy.** The client picks a server by timing
  `GET /ping` against each host (`src/client/servers/regionalServers.ts`), and
  neither host has a real `/ping` route — both fall through to the full HTML page.
  Answering it cheaply here would make the direct host look artificially faster and
  bias server selection, so the request goes to the app like any other.
- **`X-Forwarded-For` is replaced, not appended.** The server trusts the left most
  entry (`src/server/utils/clientAddress.ts`), which a client could otherwise
  forge by sending its own header. Caddy overwrites it with the real peer address.
- **Token stays out of the repo.** It lives only in `/etc/caddy/caddy.env`
  (mode 0600, owned by `caddy`). The Caddy unit deliberately omits the `--environ`
  flag that the upstream unit passes, since that would print the token into the
  journal.
- **The game server unit was adopted, not rewritten.** It was hand-installed on the
  box before this directory existed; the repo copy is byte identical, so
  `install-micromania.sh` only swaps the file for a symlink. Converting it to a
  system unit (`User=sam`, no lingering needed) would be tidier but changes a
  working setup for no functional gain.

## Troubleshooting

| Symptom                                       | Check                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Connection times out from outside             | Router forward WAN 443 → box 3001; `ss -lntp \| grep 3001` on the box                                   |
| Connection refused on 443                     | Forward exists but nothing is listening — `systemctl status caddy`                                       |
| Router login page instead of the game         | The Orbi is still answering WAN 443 — disable remote management / HTTPS admin on WAN, keep the forward   |
| `token 'replace-me' appears invalid`           | `/etc/caddy/caddy.env` still has the placeholder — add the real token. Note `caddy validate` cannot run without a valid token, since it provisions the CF module |
| `no solvers available` or TXT record errors    | Token permissions (needs Zone/DNS/Edit **and** Zone/Zone/Read); `journalctl -u caddy` shows the CF error |
| Certificate is Cloudflare's, not Let's Encrypt | You resolved the proxied hostname; confirm `dig +short direct.ageofmicro.com` is the WAN IP             |
| `502` from Caddy                              | Game server is down: `systemctl --user status micromania`, or `MICROMANIA_UPSTREAM` is wrong             |
| Game server dies after logout                 | `loginctl show-user sam \| grep Linger` — needs `Linger=yes`                                             |
| Websocket fails but page loads                | Reload rather than restart Caddy during deploys; check for `101` with the curl above                     |
