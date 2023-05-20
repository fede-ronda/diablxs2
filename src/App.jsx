import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./_App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="App__Saludo">
            <h1 className="App__Saludo-Titulo">¡Bienvenidos a PC Store!</h1>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:idCategoria"
            element={<ItemListContainer />}
          />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      {/* <div className="App">
        <NavBar />
        <div className="App__Saludo">
          <h1 className="App__Saludo-Titulo">¡Bienvenidos a PC Store!</h1>
        </div>
        <div className="App__Container">
          <ItemListContainer />
          <ItemDetailContainer />
        </div>
      </div> */}
    </>
  );
}

export default App;
