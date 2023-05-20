import React from "react";
import CartWidget from "../CartWidget/CartWidget.jsx";
import { NavLink, Link } from "react-router-dom";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <header>
      <div className="header">
        <Link to={"/"}>
          <h1 className="header__titulo">PC Store</h1>
        </Link>

        <nav className="header__nav">
          <ul className="header__nav--ul">
            <li>
              <NavLink className="inactive" to={"/categoria/1"}>
                MOTHERBOARD
              </NavLink>
            </li>
            <li>
              <NavLink className="inactive" to={"/categoria/2"}>
                PROCESADORES
              </NavLink>
            </li>
            <li>
              <NavLink className="inactive" to={"/categoria/3"}>
                MEMORIAS RAM
              </NavLink>
            </li>
            <li>
              <NavLink className="inactive" to={"/categoria/4"}>
                PLACAS DE VIDEO
              </NavLink>
            </li>
            <li>
              <NavLink className="inactive" to={"/categoria/5"}>
                FUENTES
              </NavLink>
            </li>
            <li>
              <NavLink className="inactive" to={"/categoria/6"}>
                GABINETES
              </NavLink>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
