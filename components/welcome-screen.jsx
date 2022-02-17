import { useState } from "react";
import { usePlayerContext } from "../contexts/player-context";
import Link from "next/link";

const WelcomeScreen = () => {
  // PLayer DATA via playerContext
  const { playerData, setPlayerData } = usePlayerContext();
  const { name } = playerData ?? "";

  // TEXT INPUT PLAYER name
  const [nameInput, setNameInput] = useState("");

  const changeName = (e) => {
    e.preventDefault();
    setPlayerData((playerData) => ({ ...playerData, name: nameInput }));
  };

  const deleteName = (e) => {
    e.preventDefault();
    setPlayerData((playerData) => ({ ...playerData, name: "" }));
  };

  return (
    <section id="welcome-screen">
      <header>
        <h1>Welcome</h1>
      </header>
      <div id="scroll">
        <div id="scroll-text">
          <h2>Lil Quest</h2>
          <p>
            This game is <strong> still </strong> a work in progress. <br />
            It demonstrates my skills with HTML, CSS and JavaScript. <br />
            <em>Bon chance</em> on this lil adventure!
          </p>
          <p id="instructions">
            Name your character, explore the world and defeat your adversaries!
          </p>
          <p id="special-thx">
            Special thanks: <br />
            frenz <br />
            romanz <br />
            countrymen? <br />
            Squirrelly <br />
            <em>*mini tribal* </em>
          </p>
        </div>
        {/* <!-- scroll text --> */}
      </div>
      {/* <!-- scroll  --> */}
      <p>Your name is {!!name ? "not " : ""}empty.</p>
      {!!name ? (
        <form onSubmit={deleteName}>
          <button type="submit"> please dont </button>
        </form>
      ) : (
        <form onSubmit={changeName}>
          <input
            type="text"
            id="input-el"
            placeholder="name yoself"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <button type="submit"> Submit </button>
        </form>
      )}
      <Link href="/town">town</Link>
    </section>
  );
};
export default WelcomeScreen;

// const Header = ({ greeting }) => {
//   const pData = usePlayerContext();
//   return (
//     <header>
//       <h1>Welcome, {greeting}</h1>
//       <p>{JSON.stringify(pData, null, 2)}</p>
//     </header>
//   );
// };
// export default Header;
{
  /* 
      <!-- scroll -->
      <div id="character">
        <input
          class="input"
          type="text"
          id="input-el"
          placeholder="Name your Character"
          required
        />
        <button class="btn" id="player-btn">Name Character</button>
        <div id="roll-btns">
          <button class="btn roll-btn" id="hp-btn">Roll HP</button>
          <button class="btn roll-btn" id="str-btn">Roll STR</button>
          <button class="btn roll-btn" id="def-btn">Roll DEF</button>
          <button class="btn roll-btn" id="ab-btn">Roll AB</button>
          <button class="btn roll-btn" id="gp-btn">Roll GP</button>
        </div>
        <!-- roll btns-->
      </div>
      <!-- character-->
      <div id="wel-player">
        <div class="player"></div>
        <div class="stats" id="wel-stats"></div>
      </div>

      <footer>
        <nav>
          <ul>
            <li><button class="btn nav-btn" id="town-btn">To Town</button></li>
          </ul>
        </nav>
        <h5>&copy ShenendoahT 2022</h5>
      </footer>
    </section> */
}
