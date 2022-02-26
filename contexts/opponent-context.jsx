import React, { createContext, useContext, useState } from "react";

const defaultValues = {
  name: "",
  level: 0,
  stats: { currentHP: 1, maxHP: 1, str: 0, def: 0, ab: 0 },
};

const OpponentContext = createContext(defaultValues);

const OpponentProvider = (props) => {
  const [opponentData, setOpponentData] = useState(defaultValues);
  const context = { opponentData, setOpponentData };
  return (
    <OpponentContext.Provider value={context}>
      {props.children}
    </OpponentContext.Provider>
  );
};

const useOpponentContext = () => useContext(PlayerContext);
export { OpponentContext, OpponentProvider, useOpponentContext };
