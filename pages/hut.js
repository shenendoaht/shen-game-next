import Layout from "../components/layout";
import HutScreen from "../components/hut-screen";
import pageBgSrc from "/img/locations/hut.png";

export default function Hut() {
  return (
    <Layout bg={pageBgSrc}>
      <HutScreen />
    </Layout>
  );
}
