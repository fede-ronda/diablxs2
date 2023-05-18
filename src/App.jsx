import "./App.scss";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <div className="Saludo">
          <h1 className="Saludo__Titulo">¡Bienvenidos a PC Store!</h1>
        </div>
        <ItemListContainer />
      </div>
    </>
  );
}

export default App;
