import Layout from "./layout";
import Link from "next/link";
const HouseScreen = () => (
  <section id="house-screen">
    <h1>Home sweet Home!</h1>
    <Link href="/town">town</Link>
    <Link href="/bedroom">bedroom</Link>
  </section>
);
export default HouseScreen;
