import React, {useState} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);
  const handlerAdd = () => {
    if (count < stock) setCount(count + 1);
  };

  const handlerSubtract = () => {
    if (count > 1) setCount(count - 1);
  };
  
  const handlerSelect = () => {
    if (stock > 0) onAdd(count);
  };

  return (
    <>
      <div className="botones">
        <button className="btn" onClick={handlerSubtract}>-</button>
        <p className="uni" style={{fontSize:'1rem'}}>{count}</p>
        <button className="btn" onClick={handlerAdd}>+</button>
      </div>
      <button className="carrito" onClick={handlerSelect}><ShoppingCartIcon fontSize="small"/></button>
    </>
  );
};

export default ItemCount;