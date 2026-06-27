export const regionalServers = { "https://ageofmicro.com": "perth-au" };

export async function serversByPing(): Promise<{ server: string; label: string; ping: number }[]> {
  return (
    await Promise.all(
      Object.entries(regionalServers).map(async ([server, label]) => ({
        server,
        label,
        ping: await measurePing(server),
      })),
    )
  ).sort((a, b) => a.ping - b.ping);
}

async function measurePing(host: string) {
  const start = Date.now();
  try {
    await fetch(`${host}/ping`, { mode: "no-cors" });
  } catch {
    // ignore network errors, just measure elapsed time
  }
  return Date.now() - start;
}
