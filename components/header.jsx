import { usePlayerContext } from "../contexts/player-context";

const Header = ({ greeting }) => {
  const pData = usePlayerContext();
  return (
    <header>
      <h1>Welcome, {greeting}</h1>
    </header>
  );
};
export default Header;
