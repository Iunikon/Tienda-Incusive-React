import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CartCount from '../CartCount/CartCount';

const Cart = () => {
    const { cart, total, clearCart, removeItem, addToCart } = useCartContext();
    const [isRemoving, setIsRemoving] = useState(null);
    const [isClearing, setIsClearing] = useState(false);

    const handleRemoveItem = (id, price, qty) => {
        setIsRemoving(id);
        setTimeout(() => {
            removeItem(id, price, qty);
            setIsRemoving(null);
        }, 300);
    };

    const handleClearCart = () => {
        setIsClearing(true);
        setTimeout(() => {
            clearCart();
            setIsClearing(false);
        }, 300);
    };

    return (
        <div className="min-h-[70vh] px-4">
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Carrito de Compras</h1>

                {cart.length === 0 ? (
                    <div className="text-center text-gray-600">
                        <p className="text-lg text-center">Tu carrito está vacío.</p>
                        <Link to="/" className="mt-4 inline-block px-4 py-2 bg-violet-500 text-white rounded-full hover:bg-violet-600">
                            Volver a la tienda
                        </Link>
                    </div>
                ) : (
                    <>
                        <ul className={`space-y-4 transition-opacity duration-300 ${isClearing ? 'opacity-0' : ''}`}>
                            {cart.map((item) => (
                                <li key={item.id} className={`flex items-center justify-between border-b border-gray-200 bg-white shadow-sm border rounded-lg px-6 py-4 transition-opacity duration-300 ${isRemoving === item.id ? 'opacity-0' : ''}`}>
                                    <div className="flex items-center space-x-4">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                                            <p className="text-gray-600">Precio: ${item.price.toFixed(2)}</p>
                                        </div>
                                        <CartCount stock={item.stock} initial={item.qty} itemId={item.id} /> 
                                    </div>
                                    <button onClick={() => handleRemoveItem(item.id, item.price, item.qty)} className="text-red-500 hover:text-red-600 font-semibold">Eliminar</button>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-gray-800">Total: ${total}</h2>
                            <button onClick={handleClearCart} className="px-4 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-700">Vaciar Carrito</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
