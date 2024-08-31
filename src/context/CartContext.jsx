import { createContext, useContext } from 'react';

const CartContext = createContext();

export const { Provider } = CartContext;

export const useCartContext = () => {
    return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
    const contextValue = {
        titulo: "Curso de React",
    };
    return <Provider value={contextValue}>{children}</Provider>;
};

export default CartContextProvider;
