import Layout from "../components/layout";
import TavernScreen from "../components/tavern-screen";
import pageBgSrc from "/img/locations/tavern.jpg";

export default function Tavern() {
  return (
    <Layout bg={pageBgSrc}>
      <TavernScreen />
    </Layout>
  );
}
