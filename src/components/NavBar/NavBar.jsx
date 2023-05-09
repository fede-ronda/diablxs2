import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header>
      <div className="titulo-logo">
        <h1>Games Store</h1>
        <CartWidget />
      </div>

      <nav>
        <ul>
          <li>OFERTAS</li>
          <li>PROXIMAMENTE</li>
          <li>GENERO</li>
          <li>TODOS LOS JUEGOS</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
