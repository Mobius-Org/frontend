import "./App.css";
// import Button from "./component/button";
// import { colors } from "./colors";
import Nav from "./component/Navbar";
import Footer from "./component/footer";
// import Infosec3 from "../src/component/InfoSection/InfoSection3";
// import InfoSec1 from "../src/component/InfoSection/InfoSection1";
// import InfoSection4 from "./component/InfoSection/InfoSection4";
// import InfoSection5 from "./component/InfoSection/InfoSection5";
// import CarousalSection from "./component/InfoSection/CarousalSection";
import LandingPage from "./component/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <InfoSec1 />
      <CarousalSection />
      <Infosec3 />
      <InfoSection4 /> */}
      {/* <InfoSection5 />  */}
      {/* <h1>Helloooo</h1> */}
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
