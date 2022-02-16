import React, { createContext, useContext, useState } from "react";

const defaultValues = { name: "" };

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
