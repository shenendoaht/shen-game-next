import { usePlayerContext } from "../contexts/player-context";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const PlayerSTR = () => {
  const { playerData, setPlayerData } = usePlayerContext();

  const addSTR = (e) => {
    e.preventDefault();
    setPlayerData((playerData) => ({
      ...playerData,
      STR: playerData?.STR ? playerData.STR + 1 : 1,
    }));
  };

  return (
    <div>
      <p>
        STR: <span>{playerData.STR ?? "0"}</span>
      </p>
      <button onClick={addSTR}>
        {" "}
        <BsFillArrowUpCircleFill />{" "}
      </button>
    </div>
  );
};
export default PlayerSTR;
