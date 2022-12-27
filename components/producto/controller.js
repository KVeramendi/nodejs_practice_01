export const getProductos = (request, response) => {
    const productos = productoArray;
    response.send(productos);
}