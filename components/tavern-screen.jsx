import Link from "next/link";
import Layout from "./layout";
import TavNavLinks from "./data/tav-nav-links.json";
import { usePlayerContext } from "../contexts/player-context";

const TavernScreen = () => {
  const { playerData, setPlayerData } = usePlayerContext();
  const { inventory } = playerData;

  return (
    <section id="tavern-screen">
      <h1>Ye Ol Tavern</h1>
      <p>You have {inventory?.includes("ale") ? "ale" : "no ale"}.</p>

      {inventory?.includes("ale") ? (
        <p>
          So{" "}
          <button
            onClick={() =>
              setPlayerData((playerData) => ({
                ...playerData,
                inventory: inventory.filter((item) => item !== "ale"),
              }))
            }
          >
            drink
          </button>{" "}
          it!
        </p>
      ) : (
        <p>
          So{" "}
          <button
            onClick={() =>
              setPlayerData((playerData) => ({
                ...playerData,
                inventory: [...inventory, "ale"],
              }))
            }
          >
            take
          </button>{" "}
          this one!
        </p>
      )}
      <nav id="tav-navigation">
        <h2>Tav Navigation</h2>
        <ul id="tav-navigation-links">
          {TavNavLinks.map(({ href, text }) => (
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
};

export default TavernScreen;
