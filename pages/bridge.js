import Layout from "../components/layout";
import BridgeScreen from "../components/bridge-screen";
import pageBgSrc from "/img/locations/bridge.jpg";

export default function Bridge() {
  return (
    <Layout bg={pageBgSrc}>
      <BridgeScreen />
    </Layout>
  );
}
