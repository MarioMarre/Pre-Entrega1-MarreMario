import React from "react";
import NMOsinfondo from "../../assets/NMOsinfondo.png"
import "./NavBar.css"; 
import NavCategories from "./NavCategories";
import { Link } from "react-router-dom";
//import { CartWidget } from "./CartWidget";

const NavBar = ({children}) => {

    return (
        <header className="header">
            <Link to={"/"}>
                <img className= "logo" src={NMOsinfondo} alt="Logo" />
            </Link>
            <NavCategories className="navBar"/>
            {children}
            <h1></h1>
        </header>
      );

   /*  const categorias = [
        {id:0, name: "Home"},
        {id:1, name: "Productos"},
        {id:2, name: "Contacto"},
    ]; */
    
   /*  return(
        <div className="header">
            <img className= "logo" src={NMOsinfondo} alt="Logo" />
            <nav className="navBar">
                { 
                    categorias.map((cat)=>{
                    return <li key={cat.id}><a  href="">{cat.name}</a></li>
                    })
                }
                {children}
            </nav> 
        </div>
    ) */}

export default NavBar

