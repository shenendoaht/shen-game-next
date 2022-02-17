import Link from "next/link";
import townNavLinks from "./data/town-navlinks.json";

const TownScreen = () => (
  <section id="town-screen">
    <header>
      <h1>Town</h1>
      <h2 id="town-message"></h2>
      <h4 id="town-dialogue"></h4>
    </header>
    <button id="explore-town">Explore</button>
    <div id="town-content">
      <div id="fountain">
        <button id="fountain-btn">Search Fountain</button>
        <div id="coins"></div>
        <button id="coin-btn">Take coins</button>
      </div>
      <div id="people">
        <div id="monk">
          <button id="monk-btn">Talk to Monk</button>
        </div>
        <div id="oldwoman">
          <button id="maid-btn">Talk to Old Woman</button>
        </div>
      </div>
      {/* <!-- people --> */}
    </div>
    {/* <div id="town-player">
        <div class="player"></div>
        <div class="stats" id="town-stats"></div>
      </div> */}
    <nav id="town-navigation">
      <h2>Town Navigation</h2>
      <ul id="town-navigation-links">
        {townNavLinks.map(({ href, text }) => (
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

export default TownScreen;
