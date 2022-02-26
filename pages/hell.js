import Layout from "../components/layout";
import HellScreen from "../components/hell-screen";
import pageBgSrc from "/img/locations/hell.png";

export default function Hell() {
  return (
    <Layout bg={pageBgSrc}>
      <HellScreen />
    </Layout>
  );
}
