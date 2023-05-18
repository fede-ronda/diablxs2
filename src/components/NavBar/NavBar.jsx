import React from "react";
import "./NavBar.scss";
import CartWidget from "../CartWidget/CartWidget.jsx";
import Categorias from "../Categorias/Categorias";

const NavBar = () => {
  return (
    <header>
      <div className="header">
        <h1 className="header__titulo">PC Store</h1>

        <nav className="header__nav">
          <ul>
            <li>MOTHERBOARD</li>
            <li>PROCESADORES</li>
            <li>MEMORIAS RAM</li>
            <li>PLACAS DE VIDEO</li>
            <li>FUENTES</li>
            <li>GABINETES</li>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
