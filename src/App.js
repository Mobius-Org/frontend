import "./App.css";
import Button from "./component/button";
import { colors } from "./colors";
import Nav from "./component/Navbar";
import Footer from "./component/footer";
import InputField from "./component/inputfield";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import ForgotPassword from "./pages/forgotpassword";

function App() {
  return (
    <div className="App">
      <Nav />
      <ForgotPassword />
      <Footer />
    </div>
  );
}

export default App;
