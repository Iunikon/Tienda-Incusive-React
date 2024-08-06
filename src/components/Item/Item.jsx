import ItemCount from "../Item/ItemCount";

const Item = ({ product }) => {
  return (
    <div className="p-4 border rounded shadow-sm">
      <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover" />
      <h3 className="text-slate-700 text-lg font-bold">{product.name}</h3>
      <p className="text-slate-600 text-md">{product.description}</p>
      <p className="text-slate-500 text-sm">Price: ${product.price}</p>
      <ItemCount stock={10} initial={1} />
    </div>
  );
};

export default Item;
