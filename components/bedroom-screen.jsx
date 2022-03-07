import Link from "next/link";
import { usePlayerContext } from "/contexts/player-context";
import BedroomNavLinks from "/components/data/bedroom-nav-links.json";

const BedroomScreen = () => {
  const { playerData } = usePlayerContext();
  const { name: playerName } = playerData;

  return (
    <section id="bedroom-screen">
      <h1>Here in {playerName}'s Bedroom</h1>
      <nav id="bedroom-navigation">
        <h2>Bedroom Navigation</h2>
        <ul id="bedroom-navigation-links">
          {BedroomNavLinks.map(({ href, text }) => (
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

export default BedroomScreen;
