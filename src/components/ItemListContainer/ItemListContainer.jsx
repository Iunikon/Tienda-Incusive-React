import ItemCount from "./ItemCount";
import ItemList from "./ItemList";



const ItemListContainer = ({ title, otroTitle }) => {
    let titleToShow
    if(title != undefined){
        titleToShow = "No hay productos"
    }else{
        titleToShow = otroTitle;
    }


    return (
        
    <div className="mx-auto container">
        <div className="w-1/2">
            <h2 className="text-3xl font-bold text-slate-700 mb-1">{titleToShow}  </h2> {/* Ejemplo de estilos */}
            <ItemList />
            <ItemCount stock={10} initial={1} />
        </div>

    </div>
);
};

export default ItemListContainer;
