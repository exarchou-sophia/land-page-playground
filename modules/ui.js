export const createProductView = ({ image, title, price }) => {
    const titleView = document.createElement("p");
    titleView.textContent = title;

    const imageView = document.createElement("div");
    imageView.style = `background-position: center; background-repeat: no-repeat; background-size: contain; box-shadow: 0px 4px 8px black; border-radius:10px; background-image: url('${image}'); width: 100px; height: 100px`;

    const priceView = document.createElement("p");
    priceView.textContent = "€" + price;

    const productView = document.createElement("div");
    productView.style =
        "display: flex; flex-direction: column; background-color: beige";
    productView.appendChild(titleView);
    productView.appendChild(imageView);
    productView.appendChild(priceView);

    return productView;
};

export const createProductListView = (products, onProductClicked) => {
    const productViewList = document.createElement("div");
    productViewList.style = "display: flex, flex-direction: column;";

    products.forEach(product => {
        const productView = createProductView(product);
        productView.addEventListener("click", () => onProductClicked(product));
        productViewList.appendChild(productView);
    });

    return productViewList;
};

//I want 1. the product to go to basket and 2. be saved in local storage on click.

//3. I want the product to be incremented depending on how many clicks it gets

export const addProductToBasket = product => {
    // create product view
    const productView = createProductView(product);

    const basketView = document.getElementById("basketListViewId");
    basketView.appendChild(productView);
};

export const saveProduct = product => {
    // check if the same product is already in?
    // if so than get it and increment amount and save
    let currentQuantity = 0;
    const storedProductString = localStorage.getItem(product.id);
    if (storedProductString) {
        const storedProduct = JSON.parse(storedProductString);
        currentQuantity = storedProduct.quantity;
    }

    const productWithQuantity = {
        quantity: currentQuantity + 1,
        ...product,
    };
    localStorage.setItem(product.id, JSON.stringify(productWithQuantity));
};

// localStorage.getItem("on product clicked") || [];
// savedProducts.push(product);
// localStorage.setItem("clickedProducts", JSON.stringify(savedProducts));
