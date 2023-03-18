import React from "react";
import NMOsinfondo from "../../assets/NMOsinfondo.png"
import "./NavBar.css"; 
import NavCategories from "./NavCategories";
import { Link } from "react-router-dom";



const NavBar = () => {

    return (
        <header className="header">
            <Link to={"/"}>
                <img className= "logo" src={NMOsinfondo} alt="Logo" />
            </Link>
            <NavCategories className="navBar"/>
        </header>
    );

}

export default NavBar

