import Layout from "./layout";
import { usePlayerContext } from "../contexts/player-context";
import Link from "next/link";
import ShopNavLinks from "/components/data/shop-nav-links.json";

const worldItems = ["dagger", "bow", "dual swords", "longsword", "shield"];

const ShopScreen = () => {
  const { playerData, setPlayerData } = usePlayerContext();
  const { inventory } = playerData;
  return (
    <section id="shop-screen">
      <h1>Shop Shop Shop Shop Shop!</h1>
      <section id="genstat-screen">
        <header>
          <h1>Getchur Items</h1>
        </header>
        {inventory?.length && (
          <div>
            <h2>Your Inventory</h2>
            <p>You are carrying the following items:</p>
            <p>{inventory.join(", ")}</p>
          </div>
        )}
        <div>
          <h2>Shop Inventory</h2>
          <p>If you don't got it, we do!</p>
          <ul>
            {worldItems
              .filter((item) => !inventory.includes(item))
              .map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      setPlayerData((playerData) => ({
                        ...playerData,
                        inventory: [...inventory, item],
                      }))
                    }
                  >
                    Buy {item}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </section>
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
};
export default ShopScreen;
