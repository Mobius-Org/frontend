import logo from "./logo.svg";
import "./App.css";
import Button from "./component/button";
import { colors } from "./colors";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* <Button
          bgColor={colors.primary_cadium_violet}
          dir={"right"}
          src={"images/google.svg"}
          filled={false}
        /> */}
      </header>
    </div>
  );
}

export default App;
