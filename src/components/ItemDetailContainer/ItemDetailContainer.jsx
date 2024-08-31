import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/dbConnection";
import { collection, getDoc, doc } from "firebase/firestore"; 


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        console.log("Fetching product with ID:", id); 
        setLoading(true);

        const fetchProduct = async () => {
            try {
                const productCollection = collection(db, "productos");
                const refDoc = doc(productCollection, id);
                const docSnap = await getDoc(refDoc);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data()); 
                    setProduct({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.error("No such document!");
                    setProduct(null);
                }
            } catch (error) {
                console.error("Error getting document: ", error);
                setProduct(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <main>
            {loading ? (
                <Spinner />
            ) : product ? (
                <div>
                    <ItemDetail {...product} />
                </div>
            ) : (
                <p>No product found</p>
            )}
        </main>
    );
};

export default ItemDetailContainer;
