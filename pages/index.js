import Layout from "../components/layout";
import WelcomeScreen from "../components/welcome-screen";
import pageBgSrc from "/img/locations/welcome.png";

export default function Home() {
  return (
    <Layout bg={pageBgSrc}>
      <WelcomeScreen />
    </Layout>
  );
}
