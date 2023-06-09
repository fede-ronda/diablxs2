import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import { BsFillTrashFill } from "react-icons/bs"


import "./_CartItem.scss";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <>
      <div className="CartItem">
        <h2 className="CartItem__titulo">{item.nombre}</h2>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: ${item.precio}</p>
        <button onClick={() => eliminarProducto(item.id)} className="CartItem__btn"><BsFillTrashFill></BsFillTrashFill></button>
      </div>
    </>

  );
};

export default CartItem;
