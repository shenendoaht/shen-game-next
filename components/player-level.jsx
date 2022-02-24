import { usePlayerContext } from "../contexts/player-context";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const PlayerLevel = () => {
  const { playerData, setPlayerData } = usePlayerContext();

  const levelUp = (e) => {
    e.preventDefault();
    setPlayerData((playerData) => ({
      ...playerData,
      level: playerData?.level ? playerData.level + 1 : 1,
    }));
  };

  return (
    <div>
      <p>
        Level: <span>{playerData.level ?? "0"}</span>
      </p>
      <button onClick={levelUp}>
        {" "}
        <BsFillArrowUpCircleFill />{" "}
      </button>
    </div>
  );
};
export default PlayerLevel;
