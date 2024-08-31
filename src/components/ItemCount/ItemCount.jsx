import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';

const ItemCount = ({ stock, initial, handleOnBuy }) => {
    const navigate = useNavigate();
    const [qty, setQty] = useState(initial);
    const [itemAdded, setItemAdded] = useState(false);

    const handleClick = (op) => {
        op === "-" ? clickMenos() : clickMas(); 
    };

    const clickMenos = () => {
        if (qty === 1) {
            alert("No se puede seleccionar menos de 1 producto");
            return;
        }
        setQty(qty - 1);
    };

    const clickMas = () => {
        if (qty === stock) {
            alert("No hay más stock");
            return;
        }
        setQty(qty + 1);
    };

    const handleAddToCart = () =>{
        handleOnBuy(qty);
        setItemAdded(true)
    }

    const handleGoToCheckout= () =>{
        setItemAdded(false)
        navigate("/cart")

    }
    
    return (
<div className="flex items-center justify-between space-x-2">
    <div className="flex items-center space-x-2">
        <button className="px-2.5 py-1 bg-slate-200 text-slate-600 hover:text-white rounded-lg hover:bg-violet-600 transition-colors duration-300" onClick={() => handleClick("-")}>-</button>
        <span className="text-md w-4 text-center text-slate-600 font-semibold">{qty}</span>
        <button className="px-2.5 py-1 bg-slate-200 text-slate-600 hover:text-white rounded-lg hover:bg-violet-600 transition-colors duration-300" onClick={() => handleClick("+")}>+</button>
        {
            itemAdded ? (
                <button onClick={handleGoToCheckout} className="bg-violet-600 text-white px-4 py-1.5 rounded-full hover:bg-violet-700 transition-colors duration-300">Checkout</button>
            ) : (
                <button onClick={handleAddToCart} className="bg-violet-600 text-white px-4 py-1.5 rounded-full hover:bg-violet-700 transition-colors duration-300">Añadir al carrito</button>
            )
        }
    </div>

</div>


    );
};

export default ItemCount;
