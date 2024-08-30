import { items } from "../mock/mockData";

export const getProducts = (category) => {

    let filteredItems
    if (category) {
        filteredItems = items.filter((item) => 
            item.category.includes (category)
        );
    }
    else { filteredItems  = items}


    return new Promise((resolve, reject) => {
        if (filteredItems.length > 0) {
            setTimeout(() => {
                resolve(filteredItems);
            }, 500);
        } else {
            reject("No hay productos disponibles");
        }
    });
};
