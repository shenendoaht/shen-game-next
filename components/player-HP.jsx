import { usePlayerContext } from "../contexts/player-context";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const PlayerHP = () => {
  const { playerData, setPlayerData } = usePlayerContext();

  const addHP = (e) => {
    e.preventDefault();
    setPlayerData((playerData) => ({
      ...playerData,
      HP: playerData?.HP ? playerData.HP + 1 : 1,
    }));
  };

  return (
    <div>
      <p>
        HP: <span>{playerData.HP ?? "0"}</span>
      </p>
      <button onClick={addHP}>
        {" "}
        <BsFillArrowUpCircleFill />{" "}
      </button>
    </div>
  );
};
export default PlayerHP;
