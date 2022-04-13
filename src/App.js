import "./App.css";

import Nav from "./component/Navbar";
import Footer from "./component/footer";

import LandingPage from "./component/LandingPage/LandingPage";
// import InputField from "./component/inputfield";
// import SignUp from "./pages/signup";
// import SignIn from "./pages/signin";
// import Mickysec from "./container/mickyContainer";
// import OurGames from "./container/ourgamesec";
// import ForgotPassword from "./pages/forgotpassword";

function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage />

      <Footer />
    </div>
  );
}

export default App;
