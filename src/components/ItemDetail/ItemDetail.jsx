import React from "react";

import "./_ItemDetail.scss";

const ItemDetail = ({ id, nombre, precio, img }) => {
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
