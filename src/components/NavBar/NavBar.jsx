import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header>
            <h1>Diablxs</h1>

            <nav>
                <ul>
                    <li>Buzos</li>
                    <li>Pantalones</li>
                    <li>Zapatillas</li>
                </ul>
            </nav>

        <CartWidget/>
        </header>
    )
}

export default NavBar
