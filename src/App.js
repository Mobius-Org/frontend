import "./App.css";
import Button from "./component/button";
import { colors } from "./colors";
import Nav from "./component/Navbar";
import Footer from "./component/footer";
import InputField from "./component/inputfield";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Mickysec from "./container/mickyContainer";
import OurGames from "./container/ourgamesec";

function App() {
  return (
    <div className="App">
      <Nav />
      <Mickysec />
      <OurGames />
      <Footer />
    </div>
  );
}

export default App;
