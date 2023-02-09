import React from "react";
import NMOsinfondo from "../../assets/NMOsinfondo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./NavBar.css"

const  Header = () => {
    return(
        <div className="header">
            <img className= "logo" src={NMOsinfondo} alt="Logo" />
            <nav className="navBar">
                <ul>
                    <li> <a href="">Home</a></li>
                    <li> <a href="">Productos</a></li>
                    <li> <a href="">Contacto</a></li>
                </ul>
                <a href=""><ShoppingCartIcon fontSize="medium"/></a>
            </nav>
            
        </div>
    )}

export default Header