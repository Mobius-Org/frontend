import "./App.css";
import Button from "./component/button";
import { colors } from "./colors";
import Nav from "./component/Navbar";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
      <Nav />
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
