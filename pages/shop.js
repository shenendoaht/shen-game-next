import Layout from "../components/layout";
import ShopScreen from "../components/shop-screen";
import pageBgSrc from "/img/locations/store.jpg";

export default function Shop() {
  return (
    <Layout bg={pageBgSrc}>
      <ShopScreen />
    </Layout>
  );
}
