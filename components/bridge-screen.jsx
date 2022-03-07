import Layout from "./layout";
import Link from "next/link";
import BridgeNavLinks from "/components/data/bridge-navlinks.json";
const BridgeScreen = () => (
  <section id="bridge-screen">
    <h1> </h1>
    <nav id="bridge-navigation">
      <h2>Bridge Navigation</h2>
      <ul id="bridge-navigation-links">
        {BridgeNavLinks.map(({ href, text }) => (
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
export default BridgeScreen;
