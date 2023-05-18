import "./_Item.scss";

const Item = ({ id, nombre, precio, img }) => {
  return (
    <>
      <div className="CardProducto">
        <img className="CardProducto__Img" src={img} alt={nombre} />
        <h2 className="CardProducto__Titulo">{nombre}</h2>
        <span className="CardProducto__Precio">${precio}</span>
        <button className="btnProducto">Ver</button>
      </div>
    </>
  );
};

export default Item;
