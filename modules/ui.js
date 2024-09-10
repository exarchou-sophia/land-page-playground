export const createProductView = ({ image, title, price }) => {
    const titleView = document.createElement("p");
    titleView.textContent = title;

    const imageView = document.createElement("div");
    imageView.style = `background-position: center; background-repeat: no-repeat; background-size: contain; box-shadow: 0px 4px 8px cyan; border-radius:10px; background-image: url('${image}'); width: 100px; height: 100px`;

    const priceView = document.createElement("p");
    priceView.textContent = price;

    const productView = document.createElement("div");
    productView.style =
        "display: flex; flex-direction: column; background-color: cyan";
    productView.appendChild(titleView);
    productView.appendChild(imageView);
    productView.appendChild(priceView);
    return productView;
};

export const createProductListView = products => {
    const productViewList = document.createElement("div");
    productViewList.style = "display: flex, flex-direction: column;";

    products.forEach(product => {
        const productView = createProductView(product);
        productViewList.appendChild(productView);
    });

    return productViewList;
};
