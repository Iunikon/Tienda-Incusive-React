import React, { useEffect, useState } from "react";
import ItemList from "../Itemlist/ItemList";
import { getProducts } from "../../utils/fetchData";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import Hero from "../Hero/Hero";



const ItemListContainer = ({ title }) => {
const [products, setProducts] = useState([]);
const { categoryId } = useParams();
const [loading, setLoading] = useState(true);


useEffect(() => {
console.log("Se montó el componente");
setLoading(true);
getProducts(categoryId)
.then((res) => {
console.log("Se ejecutó la promesa");
setProducts(res);
console.log("Se actualizaron los productos");
})
.catch((err) => {
console.error("Error al obtener los productos:", err);
})
.finally(() => {
console.log("Finalizó la promesa");
setLoading(false);
});
}, [categoryId]);



return (
<main>
<Hero />
    {console.log("Renderizo el componente")}
    {loading ? (
    <Spinner /> 
    ) : (
    <div>
        <h2 className="text-3xl font-bold text-slate-700 mb-1">{title}</h2>
        <ItemList products={products} title={title} />
    </div>
    )}
</main>
);

};

export default ItemListContainer;