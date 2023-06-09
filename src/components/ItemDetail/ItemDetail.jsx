import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../Context/CarritoContext";
import { useContext } from "react";

import "./_ItemDetail.scss";

const ItemDetail = ({ id, nombre, precio, stock, img }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  };

  return (
    <>
      <div className="contenedorItemDetail">
        <img className="contenedorItemDetail__Img" src={img} alt={nombre} />

        <div className="contenedorItemDetail__Info">
          <h2 className="contenedorItemDetail__Info-Titulo">{nombre}</h2>
          <span className="contenedorItemDetail__Info-Precio">
            Precio: ${precio}
          </span>
          {agregarCantidad > 0 ? (
            <Link to="/cart" className="btn"> Terminar compra </Link>
          ) : (
            <ItemCount
              inicial={1}
              stock={stock}
              funcionAgregar={manejadorCantidad}
            />
          )}
          <ul className="contenedorItemDetail__Info-Texto">
            <strong>Acerca de este producto:</strong>
            <li>
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit animi labore magni enim quod, voluptates at quasi, unde est iusto non impedit numquam rerum suscipit, nulla libero temporibus atque sunt.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
