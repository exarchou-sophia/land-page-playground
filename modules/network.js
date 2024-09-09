const getShopProducts = () =>
    fetch("https://fakestoreapi.com/products").then(res => res.json());
