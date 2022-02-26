import Layout from "../components/layout";
import InnScreen from "../components/inn-screen";
import pageBgSrc from "/img/locations/room.jpg";

export default function Inn() {
  return (
    <Layout bg={pageBgSrc}>
      <InnScreen />
    </Layout>
  );
}
