import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/fetchData";
import Spinner from "../Spinner/Spinner";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        getProductById(id) 
            .then((res) => {
                setProduct(res);
            })
            .catch((err) => {
                console.error("Error fetching product:", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return (
        <main>
            {loading ? (
                <>
                    <Spinner />
                </>
            ) : (
                <div>
                    <ItemDetail {...product} />
                </div>
            )}
        </main>
    );
};

export default ItemDetailContainer;


