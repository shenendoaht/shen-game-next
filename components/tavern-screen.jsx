import Link from "next/link";
import Layout from "./layout";
import { usePlayerContext } from "../contexts/player-context";

const TavernScreen = () => {
  const { playerData, setPlayerData } = usePlayerContext();
  const { inventory } = playerData;

  return (
    <section id="tavern-screen">
      <h1>Ye Ol Tavern</h1>
      <p>You have {inventory?.includes("ale") ? "ale" : "no ale"}.</p>

      {inventory?.includes("ale") ? (
        <p>
          So{" "}
          <button
            onClick={() =>
              setPlayerData((playerData) => ({
                ...playerData,
                inventory: inventory.filter((item) => item !== "ale"),
              }))
            }
          >
            drink
          </button>{" "}
          it!
        </p>
      ) : (
        <p>
          So{" "}
          <button
            onClick={() =>
              setPlayerData((playerData) => ({
                ...playerData,
                inventory: [...inventory, "ale"],
              }))
            }
          >
            take
          </button>{" "}
          this one!
        </p>
      )}
      <Link href="/">town</Link>
      <Link href="/">inn</Link>
    </section>
  );
};

export default TavernScreen;
