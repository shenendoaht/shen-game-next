import Layout from "./layout";
import Link from "next/link";
import ForestNavLinks from "/components/data/forest-nav-links.json";
const ForestScreen = () => (
  <section id="forest-screen">
    <h1> Dark Forest </h1>
    <nav id="forest-navigation">
      <h2>Forest Navigation</h2>
      <ul id="forest-navigation-links">
        {ForestNavLinks.map(({ href, text }) => (
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
export default ForestScreen;
