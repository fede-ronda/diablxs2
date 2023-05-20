// rafce
import { useState, useEffect } from "react";
import { getProductos, getProductosCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

// import Contador from "../Contador/Contador";

import "./ItemListContainer.scss";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria ? getProductosCategoria : getProductos;

    funcionProductos(idCategoria)
      .then((res) => setProductos(res))
      .catch((error) => console.error(error));
  }, [idCategoria]);

  return (
    <div className="fondo">
      <h2 className="fondo__Titulo">PRODUCTOS</h2>
      <ItemList productos={productos} />
      {/* <Contador inicial={1} stock={10} /> FUNCIONANDO */}
    </div>
  );
};

export default ItemListContainer;
