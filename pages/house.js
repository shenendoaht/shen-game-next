import Layout from "../components/layout";
import HouseScreen from "../components/house-screen";
import pageBgSrc from "/img/locations/house.png";

export default function House() {
  return (
    <Layout bg={pageBgSrc}>
      <HouseScreen />
    </Layout>
  );
}
