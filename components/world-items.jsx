import { usePlayerContext } from "../contexts/player-context";
import { FaUserAlt } from "react-icons/fa";
import { GiDiceEightFacesEight } from "react-icons/gi";
import Link from "next/link";

const worldItems = ["dagger", "bow", "dual swords", "longsword", "shield"];

const ItemDebugScreen = () => {
  // PLayer DATA via playerContext
  const { playerData, setPlayerData } = usePlayerContext();
  const { inventory } = playerData;

  // // Save rolled stats to playerData
  // const acceptRolledStats = () =>
  //   setPlayerData((playerData) => ({ ...playerData, stats: newStats }));

  return (
    <section id="genstat-screen">
      <header>
        <h1>Getchur Items</h1>
      </header>
      {inventory?.length && (
        <div className="debug-item-player-wrapper">
          <h2>Your Inventory</h2>
          <p>You are carrying the following items:</p>
          <p>{inventory.join(", ")}</p>
        </div>
      )}
      <div className="debug-item-shop-wrapper">
        <h2>Shop Inventory</h2>
        <p>If you don't got it, we do!</p>
        <ul>
          {worldItems
            .filter((item) => !inventory.includes(item))
            .map((item) => (
              <li key={item}>
                <button
                  onClick={() =>
                    setPlayerData((playerData) => ({
                      ...playerData,
                      inventory: [...inventory, item],
                    }))
                  }
                >
                  Buy {item}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
export default ItemDebugScreen;
