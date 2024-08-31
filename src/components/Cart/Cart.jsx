import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, total, clearCart, removeItem } = useCartContext();

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Carrito de Compras</h1>

                {cart.length === 0 ? (
                    <div className="text-center text-gray-600">
                        <p className="text-lg">Tu carrito está vacío.</p>
                        <Link to="/" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                            Volver a la tienda
                        </Link>
                    </div>
                ) : (
                    <>
                        <ul className="space-y-4">
                            {cart.map(item => (
                                <li key={item.id} className="flex items-center justify-between border-b border-gray-200 py-4">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                                            <p className="text-gray-600">Cantidad: {item.qty}</p>
                                            <p className="text-gray-600">Precio: ${item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-red-500 hover:text-red-600 font-semibold"
                                    >
                                        Eliminar
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-gray-800">Total: ${total.toFixed(2)}</h2>
                            <button
                                onClick={clearCart}
                                className="px-4 py-2 bg-violet-600 text-white rounded-full hover:bg-red-600"
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
