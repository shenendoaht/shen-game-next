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
