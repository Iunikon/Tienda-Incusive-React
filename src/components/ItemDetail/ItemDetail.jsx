const ItemDetail = ({ product }) => {
const { name, description, price, stock, image } = product;

return (
<div className="flex flex-col lg:flex-row rounded-lg items-center h-[70vh]">
    <div className="lg:w-1/2">
        <img className="rounded-lg" src={image} alt={name} />
    </div>
    <div className="lg:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">{name}</h2>
        <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl font-semibold pb-1 text-violet-600">${price}</span>
            <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${ stock> 0 ?
                'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
                >
                {stock > 0 ? `${stock} En stock` : 'Sin stock'}
            </span>
        </div>
        <p className="text-slate-600 mb-4">{description}</p>
        <div className="flex space-x-4">
            <button
                className="flex-1 bg-violet-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-violet-700 transition duration-300">
                Comprar
            </button>
            <button
                className="flex-1 bg-violet-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-violet-700 transition duration-300">
                Añadir al carrito
            </button>
        </div>
    </div>
</div>
);
}

export default ItemDetail;