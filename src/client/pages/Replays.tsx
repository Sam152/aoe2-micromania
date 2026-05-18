import Section from "../components/Section.tsx";
import { ReplayIndexItem } from "../../types.d.ts";
import { Link } from "react-router-dom";
import humanizeDuration from "humanize-duration";
import useFetched from "../hooks/useFetched.ts";

export default function Replays() {
  const games = useFetched<Array<ReplayIndexItem>>("/recs/index.json", []);

  return (
    <div className="container">
      <Section>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Players</th>
                <th>Started at</th>
                <th>Duration</th>
                <th style={{ width: 1 }}></th>
              </tr>
            </thead>
            <tbody>
              {games
                .slice()
                .reverse()
                .map((game) => (
                  <tr key={game.id}>
                    <td>{game.players.join(" vs ")}</td>
                    <td>{new Date(game.start).toLocaleString()}</td>
                    <td>
                      {humanizeDuration(game.end - game.start, {
                        units: ["m", "s"],
                        round: true,
                      })}
                    </td>
                    <td>
                      <Link className="btn" to={game.id}>
                        Watch Replay
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
}
