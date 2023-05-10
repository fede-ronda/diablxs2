import React from "react";
import "./NavBar.scss";
import CartWidget from "../CartWidget/CartWidget.jsx";

const NavBar = () => {
  return (
    <header>
      <div className="header">
        <h1 className="header__titulo">Games Store</h1>

        <nav className="header__nav">
          <ul>
            <li>OFERTAS</li>
            <li>PROXIMAMENTE</li>
            <li>GENERO</li>
            <li>TODOS LOS JUEGOS</li>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
