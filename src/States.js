import React, { useState, useEffect } from "react";

export const States = () => {
     


    const [count, setCount] = useState(0);
    const [numero, setNumero] = useState(1);

    const handlerAdd = () => {
        setCount(count + 1);
    };

    const handlerSubtract = () => {
        setCount(count - 1);
    };
    const handlerReset = () => {
        setCount(0);
    };

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handlerAdd}>Agregar al carrito</button>
            <button onClick={handlerSubtract}>Eliminar del carrito</button>
            <button onClick={handlerReset}>Vaciar carrito</button>
            <h1>{numero}</h1>
        </>
    );
};