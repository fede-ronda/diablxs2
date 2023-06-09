import { useState, useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

import "./_Checkout.scss";

const Checkout = () => {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmar, setEmailConfirmar] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const manejadorSubmit = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmar) {
      setError("Por favor completar los campos");
      return;
    }

    if (email !== emailConfirmar) {
      setError("Los email no coinciden");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: carrito.reduce(
        (total, producto) => total + producto.item.precio * producto.cantidad,
        0
      ),
      nombre,
      apellido,
      telefono,
      email,
    };

    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        vaciarCarrito();
      })
      .catch((error) => {
        console.log("error al crear la orden", error);
        setError("Se produjo un error al crear la orden");
      });
  };

  return (
    <>
      <div className="Checkout">
        <div className="Checkout__Container">
          <h2 className="Checkout__Title">Checkout</h2>
          <form className="Checkout__Form" onSubmit={manejadorSubmit}>
            {carrito.map((producto) => (
              <div className="Checkout__Form--Item" key={producto.item.id}>
                <p>
                  {producto.item.nombre} x {producto.cantidad}
                </p>
                <p>Precio: ${producto.item.precio}</p>
              </div>
            ))}

            <div className="Checkout__Form--Datos">
              <label htmlFor="">Nombre</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              ></input>
            </div>

            <div className="Checkout__Form--Datos">
              <label htmlFor="">Apellido</label>
              <input
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              ></input>
            </div>

            <div className="Checkout__Form--Datos">
              <label htmlFor="">Telefono</label>
              <input
                type="text"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              ></input>
            </div>

            <div className="Checkout__Form--Datos">
              <label htmlFor="">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>

            <div className="Checkout__Form--Datos">
              <label htmlFor="">Confirmar Email</label>
              <input
                type="text"
                value={emailConfirmar}
                onChange={(e) => setEmailConfirmar(e.target.value)}
              ></input>
            </div>

            {error && <p>{error}</p>}

            <button className="btn" type="submit">Finalizar orden</button>

            {ordenId && (
              <strong>
                Gracias por tu compra! <p>Tu numero de orden es: {ordenId}</p>
              </strong>
            )}
          </form>
        </div>


      </div >

    </>
  );
};

export default Checkout;
