export const regionalServers = ["https://us-east.aoe.cx", "https://ap-south.aoe.cx"];

export async function serversByPing(): Promise<{ server: string; ping: number }[]> {
  return (
    await Promise.all(
      regionalServers.map(async (server) => ({
        server,
        ping: await measurePing(server),
      })),
    )
  ).sort((a, b) => a.ping - b.ping);
}

async function measurePing(host: string) {
  const start = Date.now();
  try {
    await fetch(`${host}/ping`, { mode: "no-cors" });
  } finally {
    return Date.now() - start;
  }
}
