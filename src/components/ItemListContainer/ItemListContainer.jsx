import React, { useEffect, useState } from "react";
import { db } from "../../firebase/dbConnection";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import ItemList from "../Itemlist/ItemList";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import Hero from "../Hero/Hero";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    const [loading, setLoading] = useState(true);
    const { titulo } = useCartContext();

    let titleToShow = titulo;

        
    useEffect(() => {
        setLoading(true);
        const productsCollection = collection(db, "productos");

        let ProductsCollectionFiltered;
        if (categoryId) {
            ProductsCollectionFiltered = query(productsCollection, where("category", "array-contains", categoryId));
        } else {
            ProductsCollectionFiltered = productsCollection;
        }

        getDocs(ProductsCollectionFiltered)
            .then((querySnapshot) => {
                const prodFromDocs = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(prodFromDocs);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error getting documents:", error);
                setLoading(false);
            });
    }, [categoryId]);

    return (
        <main>
            <Hero />
            {loading ? (
                <Spinner />
            ) : (
                <div>
                    <h2 className="text-3xl font-bold text-slate-700 mb-1">{titleToShow}</h2>
                    <ItemList products={products} title={titleToShow} />
                </div>
            )}
        </main>
    );
};

export default ItemListContainer;
