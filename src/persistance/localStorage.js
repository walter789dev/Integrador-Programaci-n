export const handleStorageProducts = () => {
  const products = JSON.parse(localStorage.getItem("productos"));
  return products ? products : [];
};

export const setProductStorage = (productIn) => {
  if (productIn) {
    let localProducts = handleStorageProducts();
    const indexProduct = localProducts.findIndex(
      (elm) => elm.id === productIn.id
    );

    if (indexProduct !== -1) {
      localProducts[indexProduct] = productIn;
    } else {
      localProducts.push(productIn);
    }

    localStorage.setItem("productos", JSON.stringify(localProducts));
  }
};
