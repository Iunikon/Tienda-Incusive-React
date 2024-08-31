import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const { addToCart } = useCartContext();

  const handleOnBuy = (qty) => {
    console.log(`Se agregaron ${qty} productos al carrito`);
    if (typeof addToCart === 'function') {
      addToCart(product, qty);
    } else {
      console.error('addToCart no es una función');
    }
  };

  return (
    <div className="relative flex flex-col h-full p-4 border rounded-lg shadow-sm bg-white overflow-hidden">
      <div className="relative">
        <img src={product.image} alt={product.name}
          className="w-full rounded-lg h-auto object-cover"
        />
        <div className="absolute inset-0 bg-white bg-opacity-5 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
          <Link to={`/product/${product.id}`}>
            <button className="px-4 py-2 bg-white text-slate-600 rounded-full transition-colors duration-300 hover:text-white hover:bg-violet-600">
              Ver detalles
            </button>
          </Link>
        </div>
      </div>
      <h3 className="text-slate-600 text-lg font-bold mt-2">{product.name}</h3>
      <p className="text-slate-500 mb-2 text-md">${product.price}</p>
      <p className="text-slate-500 text-sm mb-4">{product.description}</p>
      
      <div className="items-center mt-auto">
        <ItemCount stock={product.stock} initial={1} handleOnBuy={handleOnBuy} />
      </div>
    </div>
  );
};

export default Item;
