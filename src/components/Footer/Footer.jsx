import { items } from "../../mock/mockData";
import {db} from "../../firebase/dbConnection";
import {collection, addDoc} from "firebase/firestore";


const Footer = () => {

  const addProducts = () => {
    const productsCollection = collection(db, "productos"); 

    items.forEach((item) => {
        addDoc(productsCollection, item)
            .then((doc) => {
                console.log("Producto agregado con ID:", doc.id);
            })
    });
};

    return (
      // Footer container
<footer className="mt-20 bg-violet-700 text-white">
  <div className="container mx-auto flex justify-between items-center p-4">
    <button 
      onClick={addProducts} 
      className="px-4 py-2 text-xs bg-violet-600 hover:bg-violet-800 text-white rounded-full transition-colors duration-300"
    >
      Agregar productos a base de datos
    </button>
    <div className="text-right">
      <span className="text-xs">
        <strong>Skims: </strong>Ropa Interior Inclusiva 2023
      </span>
    </div>
  </div>
</footer>


    );
  };
  
  export default Footer;
  