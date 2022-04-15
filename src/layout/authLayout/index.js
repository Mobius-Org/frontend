import Footer from "../../component/footer";
import Nav from "../../component/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export { AuthLayout };
