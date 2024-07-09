import ItemCount from "./ItemCount";
import ItemList from "./ItemList";



const ItemListContainer = ({ title }) => {

    return (
        
    <div className="mx-auto container">
    <h2 className="text-3xl font-bold text-slate-700 mb-1">{title}</h2> {/* Ejemplo de estilos */}
    <ItemList />
    <ItemCount stock={10} initial={1} />
    </div>
);
};

export default ItemListContainer;
