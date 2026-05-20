import { Section } from "../components/Section.tsx";
import { regionalServers, serversByPing } from "../servers/regionalServers.ts";
import { useMemoAsync } from "../hooks/useMemoAsync.ts";
import { resolveServerFromCache, setCachedServer } from "../servers/resolveServerFromCache.ts";
import { arrayOfSize } from "../../common/util/arrayOfSize.ts";

export function Servers() {
  const [servers] = useMemoAsync(serversByPing, [], []);
  const [cached] = useMemoAsync(resolveServerFromCache, null, []);

  return (
    <div className="container">
      <div className="vstack">
        <Section>
          <div className="table-wrap">
            <table className="fixed">
              <thead>
                <tr>
                  <th>Server</th>
                  <th>Ping</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {servers.length === 0 && arrayOfSize(regionalServers.length).map((i) => <RowSkeleton key={i} />)}
                {servers.map((server, i) => (
                  <tr key={i}>
                    <td>
                      <h3 className="heading-md">
                        {server.server.replace("https://", "").replace(".aoe.cx", "")}
                      </h3>
                    </td>
                    <td>{server.ping}</td>
                    <td>
                      {cached === server.server ? <p>Connected</p> : (
                        <button
                          type="button"
                          className="btn"
                          onClick={() => {
                            setCachedServer(server.server);
                            globalThis.location.reload();
                          }}
                        >
                          Connect
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      </div>
    </div>
  );
}

function RowSkeleton() {
  return (
    <tr>
      <td>
        <div className="skeleton" style={{ width: 140, height: 24 }} />
      </td>
      <td>
        <div className="skeleton" style={{ width: 40, height: 24 }} />
      </td>
      <td>
        <div className="skeleton" style={{ width: 80, height: 24 }} />
      </td>
    </tr>
  );
}
