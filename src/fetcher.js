async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products", {
    mode: "cors",
  });
  return response.json();
}

export default getProducts;
