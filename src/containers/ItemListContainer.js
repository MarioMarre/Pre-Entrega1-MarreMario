import React, { useEffect, useState }from "react";
import ItemList from "./ItemList";
import "./Style.css";


export const ItemListContainer = ({greeting})=>{
    const [products, setProducts] = useState([]);
    const [error, setError] = useState([]);
    const URL = "https://fakestoreapi.com/products"
    
     useEffect(()=>{
             const getProducts = async () => {
                try {
                    const res = await fetch(URL)
                    const data = await res.json()
                    setProducts(data)
                } catch {
                    setError(true)
                }
            }  
            
            getProducts()
        }, []) 
        
        const onAdd = (count) => {
            setTimeout(() => {
                console.log(`El usuario selecionó ${count}.`);
            }, 2000); 
        } 
    return(
        <>
            {products.length ? (
                <>
                  <ItemList products={products}/>
                </>
                ):(
                    <h3>Cargando productos...</h3>
                )
            }
        </>
    ) 
}