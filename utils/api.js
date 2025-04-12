export const fetchProducts = async () => {
    const res = await fetch("url");
    const products = await res.json()
    return products;
}