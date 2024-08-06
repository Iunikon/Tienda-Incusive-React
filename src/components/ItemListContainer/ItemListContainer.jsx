import React, { useEffect, useState } from "react";
import ItemList from "../Itemlist/ItemList";
import { getProducts } from "../../utils/fetchData";

const ItemListContainer = ({ title }) => {
    const [products, setProducts] = useState([]);
    const [cat, setCat] = useState("Casual");

    useEffect(() => {
        console.log("Se montó el componente");
        getProducts(cat)
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
            });
    }, [cat]);

    return (   
        <div className="mx-auto container">
            <div className="">
                <h2 className="text-3xl font-bold text-slate-700 mb-1">{title}</h2> 
                <ItemList products={products} />
            </div>
            <button onClick={() => setCat("Casual")}>Set cat = Casual</button>
            <button onClick={() => setCat("Deportiva")}>Set cat = Deportiva</button>
        </div>
    );
};

export default ItemListContainer;
