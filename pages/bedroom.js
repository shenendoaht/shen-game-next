import Layout from "../components/layout";
import BedroomScreen from "../components/bedroom-screen";
import pageBgSrc from "/img/locations/bedroom.png";

export default function Bedroom() {
  return (
    <Layout bg={pageBgSrc}>
      <BedroomScreen />
    </Layout>
  );
}
