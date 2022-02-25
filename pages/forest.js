import Layout from "../components/layout";
import ForestScreen from "../components/forest-screen";
import pageBgSrc from "/img/locations/forest.png";

export default function Forest() {
  return (
    <Layout bg={pageBgSrc}>
      <ForestScreen />
    </Layout>
  );
}
