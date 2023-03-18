import React, { useEffect, useState }from "react";
import { useParams } from "react-router-dom";
//import ItemCount from "../componentes/ItemCount";
import ItemList from "./ItemList";
import "./Style.css"


const productosNMO = 
[
    {id:0, name:"Difusor 125cc", stock:10, precio:400},
    {id:1, name:"Difusor 250cc", stock:10, precio:750},
    {id:2, name:"Aceite de hornillo", stock:10, precio:170},
    {id:3, name:"Perfumina spray 250cc", stock:10, precio:295}
] 

const tarjetaProd = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(productosNMO);
    },2000)
   
}) 
export const ItemListContainer = ()=>{
    const [products, setProducts] = useState([]);
    const [error, setError] = useState([]);
    //const {name} = useParams;
    const URL = "https://fakestoreapi.com/products"
    
    //const URL = "./products.json" //QUIERO USAR ESTE JSON PERO NO SE COMO MOSTRARLO.
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
                console.log("El usuario selecionó ",{count},".");
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