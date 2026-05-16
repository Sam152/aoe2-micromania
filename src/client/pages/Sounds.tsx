import React from "react";
import Section from "../components/Section";
import soundList from "../../common/sounds/soundList";

function playSound(soundName: string) {
  var audio = new Audio(`/sounds/de/${soundName}.ogg`);
  audio.play();
}

export default function Sounds() {
  return (
    <div className="container">
      <Section>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Players</th>
                <th>Started at</th>
                <th>Play</th>
              </tr>
            </thead>
            <tbody>
              {soundList.map((sound) => (
                <tr key={sound[1]}>
                  <td>{sound[0]}</td>
                  <td>{sound[1]}</td>
                  <td>
                    <button className="btn" onClick={() => playSound(sound[1])}>
                      Play
                    </button>
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
