import Header from "./header";
import Footer from "./footer";
import Background from "/components/background";

const Layout = (props) => {
  return (
    <>
      {!!props?.bg && <Background src={props.bg} />}
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
export default Layout;
