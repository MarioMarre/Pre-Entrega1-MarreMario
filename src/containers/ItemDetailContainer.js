import React, { useEffect, useState } from 'react';
import { ItemDetail } from "./ItemDetail";
import "./Style.css"

const ItemDetailContainer = () => {
   const [product, setProduct] = useState(null);
   const [error, setError] = useState([]);
   const URL = "https://fakestoreapi.com/products"
     useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await fetch(URL)
                const data = await res.json()
                setProduct(data)
            } catch {
                setError(true)
            }
        }  
        
        getProduct()
     
    }, []); 

    return (
      <section>
       {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
      </section>
    );
  }; 
 
  export default ItemDetailContainer;