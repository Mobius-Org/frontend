import { ToastContainer } from "react-toastify";
import "./App.css";
import { AppRouter } from "./appRouter";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <AppRouter />
    </div>
  );
}

export default App;
