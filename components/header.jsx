import { usePlayerContext } from "../contexts/player-context";

const Header = ({ greeting }) => {
  const pData = usePlayerContext();
  return (
    <header>
      <h1>Welcome, {greeting}</h1>
      <p>{JSON.stringify(pData, null, 2)}</p>
      <p> {typeof pData.setPlayerData} </p>
    </header>
  );
};
export default Header;
