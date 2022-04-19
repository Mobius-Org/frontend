import { Footer, Nav } from "../../component";

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
