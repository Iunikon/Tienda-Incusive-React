import ItemCount from "../Item/ItemCount";

const Item = ({ product }) => {
  return (
    <div className="p-4 border rounded shadow-sm  bg-white">
      <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover" />
      <h3 className="text-slate-600 text-lg font-bold">{product.name}</h3>
      <p className="text-slate-500 mb-2 text-md">${product.price}</p>
      <p className="text-slate-500 text-sm">{product.description}</p>      <ItemCount stock={10} initial={1} />
    </div>
  );
};

export default Item;
