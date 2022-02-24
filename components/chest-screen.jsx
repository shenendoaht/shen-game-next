import Layout from "./layout";
import Link from "next/link";
import { usePlayerContext } from "../contexts/player-context";

const ChestScreen = () => {
  const { playerData, setPlayerData } = usePlayerContext();
  const { name: pName, inventory } = playerData;

  return (
    <section id="chest-screen">
      <h1>{pName}'s in the Closet</h1>
      {inventory?.length && (
        <>
          <p>Here is your current inventory:</p>
          <pre>{JSON.stringify(inventory, null, 2)}</pre>
        </>
      )}
    </section>
  );
};
export default ChestScreen;
