document.addEventListener("DOMContentLoaded", async () => {
  try {
    const shopProducts = await getShopProducts();
    const shopProductsView = document.getElementById("shopProducts");

    shopProducts.forEach((product) => {
      console.log("product.image", product.image);

      const productItem = document.createElement("li");
      productItem.style = `background-position: center; background-repeat: no-repeat; background-size: contain; color: white; background-image: url('${product.image}'); width: 100px; height: 100px`;
      shopProductsView.appendChild(productItem);
    });
  } catch (error) {
    console.error(error);
  }
});

//example of image url
//image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
