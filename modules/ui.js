export const createProductView = (
    { id, image, title, price },
    imageSize = 50
) => {
    const titleView = document.createElement("p");
    titleView.textContent = title;

    const imgView = document.createElement("img");
    imgView.src = image;
    imgView.width = imageSize;
    imgView.height = imageSize;
    imgView.style = "object-fit: cover";

    const priceView = document.createElement("p");
    priceView.textContent = `${price}€`;

    const productView = document.createElement("div");
    productView.id = `product-view-${id}`;
    productView.appendChild(titleView);
    productView.appendChild(imgView);
    productView.appendChild(priceView);

    return productView;
};

export const createProductViewWithQuantity = (product, quantity) => {
    const productView = createProductView(product);

    const wrapper = document.createElement("div");
    wrapper.id = `product-view-${product.id}`;

    wrapper.style = "display: flex; flex-direction: column;";
    wrapper.appendChild(productView);

    const quantityText = document.createElement("p");
    quantityText.textContent = `Quantity: ${quantity}`;

    wrapper.appendChild(quantityText);
    return wrapper;
};

export const createProductListView = (products, onProductClicked) => {
    const productViewList = document.createElement("div");
    productViewList.classList.add(
        "grid",
        "grid-cols-4",
        "gap-4",
        "w-full",
        "h-64",
        "rounded-lg",
        "bg-no-repeat",
        "bg-center",
        "bg-cover",
        "shadow-lg",
        "border"
    );

    products.forEach(product => {
        const productView = createProductView(product);
        productView.addEventListener("click", () => onProductClicked(product));
        productViewList.appendChild(productView);
    });

    return productViewList;
};

export const addProductToBasket = product => {
    const basketView = document.getElementById("basketListViewId");
    const currentProductView = basketView.querySelector(
        `#product-view-${product.id}`
    );

    console.log(" `product-view-${product.id}`", `product-view-${product.id}`);
    console.log("currentProductView", currentProductView);

    if (currentProductView) {
        const productFromStorage = JSON.parse(localStorage.getItem(product.id));

        basketView.replaceChild(
            createProductViewWithQuantity(product, productFromStorage.quantity),
            currentProductView
        );
    } else {
        const productView = createProductView(product, 50);
        productView.style = "display: flex;";
        basketView.appendChild(productView);
    }
};
