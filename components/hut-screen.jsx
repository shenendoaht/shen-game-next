import Layout from "./layout";
import Link from "next/link";
import HutNavLinks from "/components/data/hut-nav-links.json";

const HutScreen = () => (
  <section id="hut-screen">
    <h1>Witch's Hut</h1>
    <nav id="hut-navigation">
      <h2>Hut You Talkin Bout Willis?</h2>
      <ul id="hut-navigation-links">
        {HutNavLinks.map(({ href, text }) => (
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
export default HutScreen;
