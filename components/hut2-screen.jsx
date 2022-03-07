import Layout from "./layout";
import Link from "next/link";
import Hut2NavLinks from "/components/data/hut-nav-links.json";

const Hut2Screen = () => (
  <section id="hut2-screen">
    <h1></h1>
    <nav id="hut2-navigation">
      <h2>Shhhh!</h2>
      <ul id="hut2-navigation-links">
        {Hut2NavLinks.map(({ href, text }) => (
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
export default Hut2Screen;
