import ItemList from "../Itemlist/ItemList";
import { products } from "../../mock/mockData";

const ItemListContainer = ({ title }) => {
    let titleToShow; // Declarar `titleToShow`

    if (title !== undefined) {
        titleToShow = "No hay productos";
    } else {
        titleToShow = title; // Asignar `title` a `titleToShow`
    }

    return (   
        <div className="mx-auto container">
            <div className="">
                <h2 className="text-3xl font-bold text-slate-700 mb-1">{titleToShow}</h2> {/* Ejemplo de estilos */}
                <ItemList products={products} />
            </div>
        </div>
    );
};

export default ItemListContainer;
