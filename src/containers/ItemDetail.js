import React from "react";
import ItemCount from "./ItemCount";


const ItemDetail = ({ product }) => {
  return (
    <div className="detalles">
      <img className="img" alt={product.title} src={product.image} />
      <div className="info">
        <h1>{product.title}</h1>
        <span>{product.description}</span>
        <h2>${product.price}</h2>
        <ItemCount className="contador" stock = {10} />
      </div>
    </div>
  );
};
export default ItemDetail;
