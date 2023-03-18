import React from "react";
import Item from "./Item";

const ItemList = ({products}) => {
    return(
       <div style={{display:"flex", flexWrap:'wrap', justifyContent:'space-between'}}>
       {products.map((product)=>{
              return <Item key={product.id} product={product}/>
            })}
       </div>
    )
};

export default ItemList