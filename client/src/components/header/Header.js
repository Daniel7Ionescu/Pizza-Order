import { useContext, useState } from "react";
import Cart from "./Cart";
import "./header.css";
import { CartContext } from "../utils/cartContext";

const Header = () => {
    const cart = useContext(CartContext);
    const cartQuantity = cart.items.reduce((accumulator, value) => accumulator + value.quantity, 0);

    function handleOpen() {
        cart.setIsCartVisible(true)
        console.log(cart.openCart);
    }

    return ( 
        <header>
            <a href="#" className="logo"><img src="img/logo.png"/></a>

            <nav className="navbar">
                <a href="#home" className="active">Home</a>
                <a href="#menu">Menu</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>

            <div className="icons">
                <button id="menu"><i className="fas fa-bars" ></i></button>

                <div className="cart-btn-container">
                    <button className="cart-btn" onClick={() => handleOpen()}><i className="fas fa-shopping-cart"></i></button>
                    
                    {cartQuantity > 0 && <div className="cart-quantity">{cartQuantity}</div>}
                </div>

                {/* <button onClick={() => cart.setIsAdminOpen(true)}>Orders</button> */}
            </div>
        </header>
    )
}
 
export default Header;