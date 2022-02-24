import { usePlayerContext } from "../contexts/player-context";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const PlayerDEF = () => {
  const { playerData, setPlayerData } = usePlayerContext();

  const addDEF = (e) => {
    e.preventDefault();
    setPlayerData((playerData) => ({
      ...playerData,
      DEF: playerData?.DEF ? playerData.DEF + 1 : 1,
    }));
  };

  return (
    <div>
      <p>
        DEF: <span>{playerData.DEF ?? "0"}</span>
      </p>
      <button onClick={addDEF}>
        {" "}
        <BsFillArrowUpCircleFill />{" "}
      </button>
    </div>
  );
};
export default PlayerDEF;
