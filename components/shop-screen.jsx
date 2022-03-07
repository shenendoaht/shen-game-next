import Layout from "./layout";
import Link from "next/link";
import ShopNavLinks from "/components/data/shop-nav-links.json";
const ShopScreen = () => (
  <section id="shop-screen">
    <h1>Shop Shop Shop Shop Shop!</h1>
    <nav id="shop-navigation">
      <h2> *****es be Shopping!! </h2>
      <ul id="shop-navigation-links">
        {ShopNavLinks.map(({ href, text }) => (
          <li key={href}>
            <Link href={href} passHref>
              <a>{text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>{" "}
  </section>
);
export default ShopScreen;
