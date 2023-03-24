import React from "react";

export const ItemDetail = (product) =>{
    return (
        <article className="detalles">
          <img src={product.image} alt="img producto"  />
          <div className="info">
            <h2 className="name">{product.title}</h2>
            <p className="description">Descripcion del producto:{product.description}</p>
            <ul>
              <li>Precio:</li>
              <li>${product.price}</li>
            </ul>
          </div>
        </article>
    )
}