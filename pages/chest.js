import Layout from "../components/layout";
import ChestScreen from "../components/chest-screen";
import pageBgSrc from "/img/locations/closet.png";

export default function Chest() {
  return (
    <Layout bg={pageBgSrc}>
      <ChestScreen />
    </Layout>
  );
}
