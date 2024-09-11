import {
    addProductToBasket,
    createProductListView,
    saveProduct,
} from "./modules/ui.js";

import { getShopProducts } from "./modules/network.js";

export const displayProductsInViewId = async viewId => {
    try {
        const view = document.getElementById(viewId);

        const shopProducts = await getShopProducts();
        const productViewList = createProductListView(shopProducts, product => {
            console.log("on product clicked", product);
            addProductToBasket(product);
            saveProduct(product);
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
});
