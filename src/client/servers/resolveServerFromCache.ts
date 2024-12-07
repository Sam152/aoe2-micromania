import { regionalServers, serversByPing } from "./regionalServers";

export async function resolveServerFromCache(): Promise<string> {
  const cached = getCachedServer();
  if (cached) {
    return cached;
  }
  const servers = await serversByPing();
  const server = servers.at(0);
  setCachedServer(server.server);
  return server.server;
}

export function setCachedServer(server: string) {
  localStorage.setItem("selectedServer", server);
}

export function getCachedServer(): string | undefined {
  const stored = localStorage.getItem("selectedServer");
  if (regionalServers.includes(stored)) {
    return stored;
  }
  return undefined;
}
