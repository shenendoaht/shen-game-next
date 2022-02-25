import Layout from "../components/layout";
import TownScreen from "../components/town-screen";
import pageBgSrc from "/img/locations/town.png";

export default function Town() {
  return (
    <Layout bg={pageBgSrc}>
      <TownScreen />
    </Layout>
  );
}
