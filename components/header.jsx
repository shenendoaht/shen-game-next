import { usePlayerContext } from "../contexts/player-context";

const Header = () => {
  const { playerData } = usePlayerContext();
  const { name, level, gold, HP, STR, DEF, AB } = playerData;

  return (
    <header>
      <h1>Welcome, {name}!</h1>
      <div id="stat-disp">
        <p>Level: {level ?? "0"}</p>
        <p> Gold: {gold ?? "0"}</p>
        <p> HP: {HP ?? "0"} </p>
        <p> STR: {STR ?? "0"}</p>
        <p> DEF: {DEF ?? "0"}</p>
        <p> AB: {AB ?? "0"}</p>
      </div>
      <hr />
    </header>
  );
};
export default Header;
