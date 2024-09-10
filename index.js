import { createProductListView } from "./modules/ui.js";
import { getShopProducts } from "./modules/network.js";

export const displayProductsInViewId = async viewId => {
    try {
        const view = document.getElementById(viewId);

        const shopProducts = await getShopProducts();
        const productViewList = createProductListView(shopProducts);

        view.appendChild(productViewList);
    } catch (error) {
        console.error(error);
    }
};

document.addEventListener("DOMContentLoaded", async () => {
    await displayProductsInViewId("productListViewId");
    await displayProductsInViewId("basketListViewId");
});
