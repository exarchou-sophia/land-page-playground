import { addProductToBasket, createProductListView } from "./modules/ui.js";

import { getShopProducts } from "./modules/network.js";
import { saveProduct } from "./modules/storage.js";

export const displayProductsInViewId = async viewId => {
    try {
        const view = document.getElementById(viewId);

        const shopProducts = await getShopProducts();
        const productViewList = createProductListView(shopProducts, product => {
            console.log("on product clicked", product);
            saveProduct(product);
            addProductToBasket(product);
        });

        view.appendChild(productViewList);
    } catch (error) {
        console.error(error);
    }
};

window.addEventListener("storage", event => {
    console.log("item was logged", event);
});

// console.log("sth clicked on product", product);
// localStorage.setItem("product", JSON.stringify(product));

document.addEventListener("DOMContentLoaded", async () => {
    await displayProductsInViewId("productListViewId");
    // await displayProductsInViewId("basketListViewId");
    console.log("localStorage.length", localStorage.length);

    // sync products in storage with basket view
    for (let i = 0; i < localStorage.length; i++) {
        const productKeyInStorage = localStorage.key(i);
        const productFromStorage = JSON.parse(
            localStorage.getItem(productKeyInStorage)
        );

        addProductToBasket(productFromStorage);
    }
});
