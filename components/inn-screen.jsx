import Layout from "./layout";
import Link from "next/link";
import InnNavLinks from "/components/data/inn-nav-links.json";

const InnScreen = () => (
  <section id="inn-screen">
    <h1>Stay Inn</h1>
    <nav id="inn-navigation">
      <h2>Inn or Out?!</h2>
      <ul id="inn-navigation-links">
        {InnNavLinks.map(({ href, text }) => (
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
export default InnScreen;
