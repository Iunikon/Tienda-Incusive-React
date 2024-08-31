import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Cart = () => {
    const { cart, total, clearCart, removeItem, addToCart } = useCartContext();
    const [quantities, setQuantities] = useState(cart.map(item => item.qty));

    const handleQuantityChange = (index, newQty) => {
        const updatedQuantities = [...quantities];
        updatedQuantities[index] = newQty;
        setQuantities(updatedQuantities);

        const item = cart[index];
        const diff = newQty - item.qty;
        addToCart(item, diff);
    };

    return (
        <div className="min-h-[70vh] px-4">
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Carrito de Compras</h1>

                {cart.length === 0 ? (
                    <div className="text-center text-gray-600">
                        <p className="text-lg">Tu carrito está vacío.</p>
                        <Link to="/" className="mt-4 inline-block px-4 py-2 bg-violet-500 text-white rounded-full hover:bg-violet-600">
                            Volver a la tienda
                        </Link>
                    </div>
                ) : (
                    <>
                        <ul className="space-y-4">
                            {cart.map((item, index) => (
                                <li key={item.id} className="flex items-center justify-between border-b border-gray-200 bg-white shadow-sm border rounded-lg px-6 py-4">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                                            <div className="flex items-center space-x-2">
                                                <label htmlFor={`quantity-${item.id}`} className="text-gray-600">Cantidad:</label>
                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        className="px-2.5 py-1 bg-slate-200 text-slate-600 hover:text-white rounded-lg hover:bg-violet-600 transition-colors duration-300"
                                                        onClick={() => handleQuantityChange(index, quantities[index] - 1)}
                                                    >
                                                        -
                                                    </button>
                                                    <input
                                                        type="number"
                                                        id={`quantity-${item.id}`}
                                                        value={quantities[index]}
                                                        min="1"
                                                        onInput={(e) => {
                                                            if (e.target.value === '') {
                                                                e.target.value = 1;
                                                            }
                                                        }}
                                                        onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                                                        className="appearance-none text-md w-9 h-9 text-center text-slate-600 font-semibold"
                                                    />
                                                    <button
                                                        className="px-2.5 py-1 bg-slate-200 text-slate-600 hover:text-white rounded-lg hover:bg-violet-600 transition-colors duration-300"
                                                        onClick={() => handleQuantityChange(index, quantities[index] + 1)}
                                                    >
                                                        +
                                                    </button>
                                                    </div>
                                            </div>
                                            <p className="text-gray-600">Precio: ${item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id, item.price, item.qty)}
                                        className="text-red-500 hover:text-red-600 font-semibold"
                                    >
                                        Eliminar
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-gray-800">Total: ${total}</h2>
                            <button
                                onClick={clearCart}
                                className="px-4 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-700"
                            >
                                Vaciar Carrito
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
