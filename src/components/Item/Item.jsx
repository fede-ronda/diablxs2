import { Link } from "react-router-dom";

import "./_Item.scss";

const Item = ({ id, nombre, precio, img }) => {
  return (
    <>
      <div className="CardProducto">
        <img className="CardProducto__Img" src={img} alt={nombre} />
        <h2 className="CardProducto__Titulo">{nombre}</h2>
        <span className="CardProducto__Id">Id: {id}</span>
        <span className="CardProducto__Precio">${precio}</span>
        {/* <button className="btnProducto">Ver</button> */}
        <Link className="btnProducto" to={`/item/${id}`}>
          Ver
        </Link>
      </div>
    </>
  );
};

export default Item;
