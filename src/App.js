import "./App.css";
import Header from "./Components/Header";
import Mainbar from "./Main/MainBar";

function App() {
  return (
    // <div style={{ display: "flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
    <div style={{ padding: "0.5em 0 0 0" }}>
      <Header />
      <Mainbar/>
    </div>
  );
}

export default App;
