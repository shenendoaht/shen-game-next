import { usePlayerContext } from "../contexts/player-context";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const PlayerAB = () => {
  const { playerData, setPlayerData } = usePlayerContext();

  const addAB = (e) => {
    e.preventDefault();
    setPlayerData((playerData) => ({
      ...playerData,
      AB: playerData?.AB ? playerData.AB + 1 : 1,
    }));
  };

  return (
    <div>
      <p>
        AB: <span>{playerData.AB ?? "0"}</span>
      </p>
      <button onClick={addAB}>
        {" "}
        <BsFillArrowUpCircleFill />{" "}
      </button>
    </div>
  );
};
export default PlayerAB;
