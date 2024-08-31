import { useState } from 'react';
import ItemCount from "../Item/ItemCount";
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({ product }) => {
    const { addToCart } = useCartContext();
    const { id, name, description, price, stock, image } = product;
    const [count, setCount] = useState(1); 

    const handleOnBuy = (qty) => {
        console.log(`Se agregaron ${qty} productos al carrito`);
        const item = {id, name, description, price};
        addToCart(item, qty);
    }

    return (
        <div className="flex flex-col lg:flex-row rounded-lg items-center h-[70vh]">
            <div className="lg:w-1/2">
                <img className="rounded-lg" src={image} alt={name} />
            </div>
            <div className="lg:w-1/2 p-6 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">{name}</h2>
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl font-semibold pb-1 text-violet-600">${price}</span>
                    <span
                        className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${
                            stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}
                    >
                        {stock > 0 ? `${stock} En stock` : 'Sin stock'}
                    </span>
                </div>
                <p className="text-slate-600 mb-4">{description}</p>
                    <ItemCount stock={stock} initial={1} handleOnBuy={handleOnBuy} />
            </div>
        </div>
    );
};

export default ItemDetail;
