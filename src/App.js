import "./App.css";
import Header from "./Components/Header";
import Footer from "./Footer/Footer";
import Mainbar from "./Main/MainBar";

function App() {
  return (
    <div style={{ padding: "0.5em 0 0 0" }}>
      <Header />
      <Mainbar/>
      <Footer/>
    </div>
  );
}

export default App;
