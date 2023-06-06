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
    // console.log("productos agregados:" + cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  };

  return (
    <>
      <div className="contenedorItemDetail">
        <img className="contenedorItemDetail__Img" src={img} alt={nombre} />

        <div className="contenedorItemDetail__Info">
          <h2 className="contenedorItemDetail__Info-Titulo">{nombre}</h2>
          <span className="contenedorItemDetail__Info-Id">ID: {id}</span>
          <span className="contenedorItemDetail__Info-Precio">
            Total: ${precio}
          </span>
          {agregarCantidad > 0 ? (
            <Link to="/cart"> Terminar compra </Link>
          ) : (
            <ItemCount
              inicial={1}
              stock={stock}
              funcionAgregar={manejadorCantidad}
            />
          )}
          <p className="contenedorItemDetail__Info-Texto">
            <strong>Descripcion:</strong> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eaque consequuntur, vitae adipisci autem quas
            minus perspiciatis fugiat distinctio inventore porro libero, cumque
            earum ipsum alias perferendis, sapiente reprehenderit officia.
            Voluptatum.
          </p>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
