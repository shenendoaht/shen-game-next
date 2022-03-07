import Layout from "./layout";
import Link from "next/link";
import HouseNavLinks from "/components/data/house-nav-links.json";
const HouseScreen = () => (
  <section id="house-screen">
    <h1>Home sweet Home!</h1>
    <nav id="house-navigation">
      <h2>House Navigation</h2>
      <ul id="house-navigation-links">
        {HouseNavLinks.map(({ href, text }) => (
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
export default HouseScreen;
