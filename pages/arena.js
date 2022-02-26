import Layout from "../components/layout";
import ArenaScreen from "../components/arena-screen";
import pageBgSrc from "/img/locations/arena.png";

export default function Arena() {
  return (
    <Layout bg={pageBgSrc}>
      <ArenaScreen />
    </Layout>
  );
}
