import { usePlayerContext } from "../contexts/player-context";

const Header = () => {
  const { playerData } = usePlayerContext();
  const { name } = playerData;

  return (
    <header>
      <h1>Welcome, {name}!</h1>
      <hr />
    </header>
  );
};
export default Header;
