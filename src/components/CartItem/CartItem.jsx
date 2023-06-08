import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";

import "./_CartItem.scss";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div>
      <h2>{item.nombre}</h2>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: ${item.precio}</p>
      <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
