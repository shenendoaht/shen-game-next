import React, { createContext, useContext, useState } from "react";

const defaultValues = {
  name: "",
  level: 0,
  stats: { currentHP: 1, maxHP: 1, str: 0, def: 0, ab: 0, gp: 0 },
  inventory: [],
};

const PlayerContext = createContext(defaultValues);

const PlayerProvider = (props) => {
  const [playerData, setPlayerData] = useState(defaultValues);
  const context = { playerData, setPlayerData };
  return (
    <PlayerContext.Provider value={context}>
      {props.children}
    </PlayerContext.Provider>
  );
};

const usePlayerContext = () => useContext(PlayerContext);
export { PlayerContext, PlayerProvider, usePlayerContext };
