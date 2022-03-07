import Layout from "./layout";
import Link from "next/link";
import ArenaNavLinks from "./data/arena-navlinks.json";

const ArenaScreen = () => (
  <section id="arena-screen">
    <h1>The Arena</h1>
    <nav id="arena-navigation">
      <h2> Arena Nav </h2>
      <ul id="arena-navlinks">
        {ArenaNavLinks.map(({ href, text }) => (
          <li key={href}>
            <Link href={href} passHref>
              <a>{text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </section>
);
export default ArenaScreen;
