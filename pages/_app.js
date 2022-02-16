import "../styles/globals.css";
import { PlayerProvider } from "../contexts/player-context";

const App = ({ Component, pageProps }) => (
  <PlayerProvider>
    <Component {...pageProps} />
  </PlayerProvider>
);
export default App;
