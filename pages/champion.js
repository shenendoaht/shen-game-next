import Layout from "../components/layout";
import ChampScreen from "../components/champ-screen";
import pageBgSrc from "/img/locations/champion.png";

export default function Champion() {
  return (
    <Layout bg={pageBgSrc}>
      <ChampScreen />
    </Layout>
  );
}
