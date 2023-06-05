import { useState } from "react";

import "./_ItemCount.scss";

const Contador = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <div className="Contador">
        <button className="Contador__btn" onClick={decrementar}>
          -
        </button>
        <strong className="Contador__num">{contador}</strong>
        <button className="Contador__btn" onClick={incrementar}>
          +
        </button>
        <button
          className="Contador__btn--agregar"
          onClick={() => funcionAgregar(contador)}
        >
          Agregar
        </button>
      </div>
    </>
  );
};

export default Contador;
