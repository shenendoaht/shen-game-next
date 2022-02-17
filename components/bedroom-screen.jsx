import Link from "next/link";
import { usePlayerContext } from "../contexts/player-context";

const BedroomScreen = () => {
  const { playerData } = usePlayerContext();
  const { name: playerName } = playerData;

  return (
    <section id="bedroom-screen">
      <h1>Here in {playerName}'s Bedroom</h1>
      <Link href="/">bedroom</Link>
    </section>
  );
};

export default BedroomScreen;
