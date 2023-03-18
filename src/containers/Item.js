import React from "react";
import ItemCount from "../componentes/ItemCount";

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
            <p>${product.price}</p>
            <ItemCount stock = {10} onAdd={onAdd}/>
        </div>
        </>
    )
};

export default Item