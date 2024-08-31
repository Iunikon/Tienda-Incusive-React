import { useState, useEffect, createContext, useContext } from 'react';

const cartContext = createContext();

export const useCartContext = () => {
    return useContext(cartContext);
};

const CartContextProvider = ({ children }) => {
    const [qtyItems, setQtyItems] = useState(0);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem('cart')) || [];
        const localTotal = JSON.parse(localStorage.getItem('total')) || 0;
        const localQty = JSON.parse(localStorage.getItem('qty')) || 0;

        setCart(localCart);
        setTotal(localTotal);
        setQtyItems(localQty);
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('total', JSON.stringify(total));
        localStorage.setItem('qty', JSON.stringify(qtyItems));
        console.log('Cart:', cart);
        console.log('Total:', total);
        console.log('QtyItems:', qtyItems);
    }, [cart, total, qtyItems]);

    const isInCart = (id) => {
        return cart.find((elem) => elem.id === id);
    };

    const addToCart = (item, qty) => {
        setQtyItems((prevQty) => prevQty + qty);
        setTotal((prevTotal) => prevTotal + item.price * qty);
    
        let newCart;
    
        if (isInCart(item.id)) {
            newCart = cart.map((elem) => {
                if (elem.id === item.id) {
                    return { ...elem, qty: elem.qty + qty };
                }
                return elem;
            });
        } else {
            newCart = [...cart, { ...item, qty }];
        }
    
        setCart(newCart);
    };

    const removeItem = (id) => {
        const itemToRemove = cart.find((elem) => elem.id === id);
        if (itemToRemove) {
            setTotal((prevTotal) => prevTotal - itemToRemove.price * itemToRemove.qty);
            setQtyItems((prevQty) => prevQty - itemToRemove.qty);
    
            const newCart = cart.filter((elem) => elem.id !== id);
    
            setCart(newCart);
        }
    };

    const updateCartQuantity = (itemId, newQty) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.map((item) =>
                item.id === itemId ? { ...item, qty: newQty } : item
            );
    
            const newTotal = updatedCart.reduce((acc, item) => acc + item.price * item.qty, 0);
            const newQtyItems = updatedCart.reduce((acc, item) => acc + item.qty, 0);
    
            setTotal(newTotal);
            setQtyItems(newQtyItems);
    
            return updatedCart;
        });
    };

    const clearCart = () => {
        setCart([]);
        setTotal(0);
        setQtyItems(0);
        localStorage.removeItem('cart');
        localStorage.removeItem('total');
        localStorage.removeItem('qty');
    };

    const contextValue = {
        qtyItems,
        total,
        cart,
        addToCart,
        removeItem,
        clearCart,
        updateCartQuantity
    };

    return <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
