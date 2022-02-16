import Layout from "./layout";
import Link from "next/link";
const TownScreen = () => (
  <section id="town-screen">
    <h1>Lil Ol Town</h1>
    <Link href="/">house</Link>
    <Link href="/">arena</Link>
    <Link href="/">shop</Link>
    <Link href="/">forest</Link>
  </section>
);
export default TownScreen;
