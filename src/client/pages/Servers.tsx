import React from "react";
import Section from "../components/Section";
import { regionalServers, serversByPing } from "../servers/regionalServers";
import { useMemoAsync } from "../hooks/useMemoAsync";
import { resolveServerFromCache, setCachedServer } from "../servers/resolveServerFromCache";
import arrayOfSize from "../../common/util/arrayOfSize";

export default function Servers() {
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
                      {cached === server.server ? (
                        <p>Connected</p>
                      ) : (
                        <button
                          className="btn"
                          onClick={() => {
                            setCachedServer(server.server);
                            window.location.reload();
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
