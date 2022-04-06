
import "./App.css";
import Button from "./component/button";
import { colors } from "./colors";
import Nav from "./component/Navbar";
import Footer from "./component/footer";
import Infosec3 from "../src/component/InfoSection/InfoSection3";
import InfoSec1 from '../src/component/InfoSection/InfoSection1';


function App() {
  return (
    <div className="App">
      <Nav />
      <InfoSec1 />
      <Infosec3 />
      <Button
        src={null}
        bgColor={colors.secondary_color}
        filled={false}
        dir={"right"}
      />
      <Footer />
    </div>
  );
}

export default App;
