import "./App.scss";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <h1>¡Bienvenidos!</h1>
        <ItemListContainer greeting="se vienen cositas..." />
      </div>
    </>
  );
}

export default App;
