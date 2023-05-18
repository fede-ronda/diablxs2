// rafce
import { useState, useEffect } from "react";
import { getProductos } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import Contador from "../Contador/Contador";

import "./ItemListContainer.scss";

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then((res) => setProductos(res))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="fondo">
      <h2 className="fondo__Titulo">PRODUCTOS</h2>
      <ItemList productos={productos} />
      {/* <Contador inicial={1} stock={10} /> FUNCIONANDO */}
    </div>
  );
};

export default ItemListContainer;
