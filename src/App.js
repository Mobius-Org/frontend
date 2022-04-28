import { ToastContainer } from "react-toastify";
// import "./App.css";
// import { AppRouter } from "./appRouter";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
// import { Modal } from "./component";
import { Admin } from "./component";
import {Adminvideo} from "./component"

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      {/* <ToastContainer /> */}
      {/* <Modal showModal={showModal} SetShowModal={setShowModal} /> */}
      {/* <AppRouter showModal={showModal} SetShowModal={setShowModal} /> */}
      {/* <Admin /> */}
      <Adminvideo />
    </div>
  );
}

export default App;
