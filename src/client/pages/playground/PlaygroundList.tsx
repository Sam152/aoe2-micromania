import { Link } from "react-router-dom";
import { Section } from "../../components/Section.tsx";

type Playground = {
  name: string;
  path: string;
};

const playgrounds: Playground[] = [
  { name: "Formations", path: "/playground/formations" },
  { name: "Arrow frames", path: "/playground/arrow-frames" },
  { name: "Mango fan-out", path: "/playground/mango-fanout" },
  { name: "Accuracy analysis", path: "/playground/accuracy-analysis" },
  { name: "Group unit vector facing direction", path: "/playground/group-unit-vector-facing-direction" },
  { name: "Trained bots", path: "/playground/trained-bots" },
];

export function PlaygroundList() {
  return (
    <div className="container">
      <div className="vstack">
        <Section>
          <div className="table-wrap">
            <table className="fixed">
              <thead>
                <tr>
                  <th>Playground</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {playgrounds.map((playground) => (
                  <tr key={playground.path}>
                    <td>{playground.name}</td>
                    <td className="text-right">
                      <Link className="btn" to={playground.path}>
                        Open
                      </Link>
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
