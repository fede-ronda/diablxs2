import React from "react";

import "./ItemList.scss";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return (
    <>
      <div className="Container">
        {productos.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
