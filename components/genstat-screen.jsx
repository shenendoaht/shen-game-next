import { useState } from "react";
import { usePlayerContext } from "../contexts/player-context";
import { FaUserAlt } from "react-icons/fa";
import { GiDiceEightFacesEight } from "react-icons/gi";
import Link from "next/link";

const rollableStats = [
  {
    stat: "currentHP",
    label: "currentHP",
  },
  {
    stat: "maxHP",
    label: "HP",
  },
  {
    stat: "str",
    label: "STR",
  },
  {
    stat: "def",
    label: "DEF",
  },
  {
    stat: "ab",
    label: "AB",
  },
  {
    stat: "gp",
    label: "GP",
    max: 50,
  },
];

const GenStatScreen = () => {
  // PLayer DATA via playerContext
  const { playerData, setPlayerData } = usePlayerContext();
  const { name: pName, level, stats } = playerData ?? "";

  // The potential set of stats
  const [newStats, setNewStats] = useState({});

  // roll a d(N)
  const rollD = (n) => Math.floor(Math.random() * n) + 1;

  // Generate a new set of stats
  const rollStats = () =>
    setNewStats({ currentHP: 0, maxHP: 0, str: 0, def: 0, ab: 0, gp: 0 });

  // Save rolled stats to playerData
  const acceptRolledStats = () =>
    setPlayerData((playerData) => ({ ...playerData, stats: newStats }));

  return (
    <section id="genstat-screen">
      <header>
        <h1>We Generatin' Stats, Yo</h1>
      </header>
      <div className="container singlerolls-wrapper">
        {rollableStats
          .filter((st) => st.stat !== "currentHP")
          .map((st) => (
            <button
              key={st.stat}
              onClick={() =>
                setNewStats((newStats) => {
                  // Weird Cases to handle
                  if (st.stat !== "maxHP")
                    return { ...newStats, [st.stat]: rollD(st.max ?? 6) };

                  let newHP = rollD(6);
                  return { ...newStats, currentHP: newHP, maxHP: newHP };
                })
              }
            >
              Roll {st.label}
            </button>
          ))}
      </div>
      <div className="container rolled-wrapper">
        <div className="col old-stats">
          <h2>Current Stats</h2>
          <pre>{JSON.stringify(stats)}</pre>
        </div>
        <div className="col new-stats">
          <h2>Rolled Stats</h2>
          <pre>{JSON.stringify(newStats)}</pre>
        </div>
      </div>
      <div className="container actions-wrapper">
        <button onClick={rollStats}>Roll Stats</button>
        {newStats && <button onClick={acceptRolledStats}>Accept Stats</button>}
      </div>
    </section>
  );
};
export default GenStatScreen;
