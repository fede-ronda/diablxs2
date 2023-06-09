import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import CartItem from "../CartItem/CartItem";

import "./_Cart.scss";

const Cart = () => {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);

  const totalCantidad = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  const total = carrito.reduce(
    (total, producto) => total + producto.item.precio * producto.cantidad,
    0
  );

  if (totalCantidad === 0) {
    return (
      <>
        <div className="cartVacio">
          <div className="cartVacio__Contenido">
            <h2>No hay productos en el carrito :'(</h2>
            <Link className="btn" to="/">Seguir comprando</Link>
          </div>
        </div>


      </>
    );
  }

  return (
    <>
      <div className="cartContainer">
        {carrito.map((producto) => (
          <CartItem key={producto.id} {...producto} />
        ))}
        <div className="cartInfo">
          <h3>Productos en total: {totalCantidad}</h3>
          <h3> Valor total: ${total}</h3>
          <button className="btn" onClick={() => vaciarCarrito()}>Vaciar carrito</button>
          <Link className="btn" to="/checkout">Finalizar compra</Link>
        </div>
      </div>



    </>

  );
};

export default Cart;
