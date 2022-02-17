import Layout from "./layout";
import Link from "next/link";
import { PlayerContext, usePlayerContext } from "../contexts/player-context";
const ChestScreen = () => (
  <section id="chest-screen">
    <h1>{(PlayerContext, usePlayerContext)}s in the Closet</h1>
    <Link href="/">Inventory</Link>
  </section>
);
export default ChestScreen;
