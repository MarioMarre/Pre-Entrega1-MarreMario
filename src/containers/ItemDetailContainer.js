import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import "./Style.css"

const ItemDetailContainer = ( ) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/2`);
        const data = await res.json();
        setProduct(data);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, []);

  return (
    <>
      {<>{loading ? <h1>Cargando...</h1> : <ItemDetail product={product} />}</>}
    </>
  );
};
  
 
 export default ItemDetailContainer;