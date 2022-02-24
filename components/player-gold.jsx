import { usePlayerContext } from "../contexts/player-context";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const PlayerGold = () => {
  const { playerData, setPlayerData } = usePlayerContext();

  const gainGold = (e) => {
    e.preventDefault();
    setPlayerData((playerData) => ({
      ...playerData,
      gold: playerData?.gold ? playerData.gold + 1 : 1,
    }));
  };

  return (
    <div>
      <p>
        Gold: <span>{playerData.gold ?? "0"}</span>
      </p>
      <button onClick={gainGold}>
        {" "}
        <BsFillArrowUpCircleFill />{" "}
      </button>
    </div>
  );
};
export default PlayerGold;
