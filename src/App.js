import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Navigation";
import Pets from "./Pets";
import Footer from "./Footer";
import Player from "./Players";
import Main from "./Main";

function App() {
  return (
    <div>
      <Navigation />
      {/* <Pets /> */}
      <Main />

      <Footer />
      {/* <Player /> */}
    </div>
  );
}

export default App;
