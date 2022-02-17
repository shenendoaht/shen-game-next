import Link from "next/link";
const TownScreen = () => {
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
    <Link href="/forest"> forest </Link>
    <Link href="/tavern"> tavern </Link>
    <Link href="/house"> house </Link>
    <Link href="/arena"> arena </Link>
    <Link href="/shop"> shop </Link>
  </section>;
};
export default TownScreen;
//  <nav>
//    <ul>
//      <li>
//        <button id="house-btn">House</button>
//      </li>
//      <li>
//        <button id="tav-btn">Tavern</button>
//      </li>
//      <li>
//        <button id="shop-btn">Shop</button>
//      </li>
//      <li>
//        <button id="arena-btn">Arena</button>
//      </li>
//      <li>
//        <button id="forest-btn">Forest</button>
//      </li>
//    </ul>
//  </nav>;
