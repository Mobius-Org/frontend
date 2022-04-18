import Footer from "../../component/footer";
import Nav from "../../component/Navbar";

const AuthLayout = ({ children, showModal, setShowModal }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export { AuthLayout };
