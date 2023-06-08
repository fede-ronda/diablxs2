import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";

import "./_CartWidget.scss";
import { BsFillCartFill } from "react-icons/bs";

const CardWidget = () => {
  const { carrito } = useContext(CarritoContext);

  const totalCantidad = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  return (
    <Link to="/cart" className="Cart">
      <div className="Cart__Icon">
        <BsFillCartFill />
      </div>
      {totalCantidad > 0 && (
        <strong className="Cart__Num">{totalCantidad}</strong>
      )}
    </Link>
  );
};

export default CardWidget;
