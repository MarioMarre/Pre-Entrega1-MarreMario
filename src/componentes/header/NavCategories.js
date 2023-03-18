import React from "react";
import {Link} from "react-router-dom";
import { CartWidget } from "./CartWidget";

const NavCategories = () => {
const categories = [
    {id:1, name: "Home", route: "/nmo/home"},
    {id:2, name: "Productos", route:"/nmo/productos"},
    {id:3, name: "Contacto", route:"/nmo/contacto"}
];
return (
    <nav className="navBar">
        {categories.map((category)=> {
            return(
                <li>
                    <Link key={category.id} to={category.route}>
                        {category.name}
                    </Link>
                </li>
            )
        })}
        <Link><CartWidget/></Link>
    </nav>
)

}
export default NavCategories;