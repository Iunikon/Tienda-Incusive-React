import React, { useState } from 'react'; 

const ItemCount = ({ stock, initial }) => {
    const [qty, setQty] = useState(initial);

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

    return (
        <div className="flex items-center space-x-2 ">
            <button className="px-2.5 py-1 bg-slate-200 text-slate-600 hover:text-white rounded-lg hover:bg-violet-600 transition-colors duration-300" onClick={() => handleClick("-")}>-</button>
            <span className="text-md w-4 text-center text-slate-600 font-semibold">{qty}</span>
            <button className="px-2.5 py-1 bg-slate-200 text-slate-600 hover:text-white rounded-lg hover:bg-violet-600 transition-colors duration-300" onClick={() => handleClick("+")}>+</button>
        </div>
    );
};

export default ItemCount;
