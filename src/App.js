import { ToastContainer } from "react-toastify";
import "./App.css";
import { AppRouter } from "./appRouter";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./component/modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <ToastContainer />
      <Modal showModal={showModal} SetShowModal={setShowModal} />
      <AppRouter showModal={showModal} SetShowModal={setShowModal} />
    </div>
  );
}

export default App;
