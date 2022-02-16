import Layout from "./layout";
import Link from "next/link";
const ChestScreen = () => (
  <section id="chest-screen">
    <h1>{playerName}s in the Closet</h1>
    <Link href="/">Inventory</Link>
  </section>
);
export default ChestScreen;
