import { useState } from "react";

const Contador = ({ inicial, stock }) => {
  const [contador, setContador] = useState(inicial);

  const AumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const DisminuirContador = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  const AgregarAlCarrito = () => {
    console.log(`Agregado ${contador} items`);
  };

  return (
    <>
      <h1>Contador</h1>

      <button onClick={DisminuirContador}>-</button>
      <strong>{contador}</strong>
      <button onClick={AumentarContador}>+</button>

      <button onClick={AgregarAlCarrito}>Agregar</button>
    </>
  );
};

export default Contador;
