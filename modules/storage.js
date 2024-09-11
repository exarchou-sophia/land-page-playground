export const saveProduct = product => {
    console.log("save product", product);

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
