import { BottomNavigation, CardContent } from "@mui/material";
import React from "react";
import ItemCount from "../componentes/ItemCount";
import "./Style.css"
import { Link } from "react-router-dom";

const Item = ({product}) => {
           const onAdd = (count) => {
               setTimeout(() => {
                   console.log("El usuario selecionó",{count});
               }, 2000);
           }
    return(
       <> 
        <div style={{width:'20%', backgroundColor:'white', margin:'1%', padding:'1%'}}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} style={{width:'30%'}}/>
            <CardContent className="card">
                <p>${product.price}</p>
                <ItemCount stock = {10} onAdd={onAdd}/>
                
                <Link className="details" to="/nmo/detalles">VER DETALLES</Link>
            </CardContent>
        </div>
       


        </>
    )
};

export default Item