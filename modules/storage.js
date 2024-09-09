document.addEventListener("DOMContentLoaded", async () => {
    try {
        const shopProducts = await getShopProducts();
        const shopProductsView = document.getElementById("shopProducts");

        shopProducts.forEach(({ image, title, description }) => {
            console.log("product.image", image);
            console.log("product.description", description);
            console.log("product.title", title);

            // add title
            const titleView = document.createElement("h1");
            titleView.textContent = title;
            shopProductsView.appendChild(titleView);

            //add description
            const descriptionView = document.createElement("p");
            descriptionView.textContent = description;
            shopProductsView.appendChild(descriptionView);

            // add image
            const productView = document.createElement("li");
            productView.style = `background-position: center; background-repeat: no-repeat; background-size: contain; color: white; background-image: url('${image}'); width: 100px; height: 100px`;
            shopProductsView.appendChild(productView);
        });
    } catch (error) {
        console.error(error);
    }
});

//example of image url
//image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
