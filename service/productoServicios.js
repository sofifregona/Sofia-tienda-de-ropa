const listaProductos = async () => {
  try {
    const respuesta = await fetch(
      "https://sofifregona.github.io/Sofia-tienda-de-ropa/db.json"
    );
    const data = await respuesta.json();
    return data.productos
  } catch (error) {
    return console.log(error);
  }
};

const detalleProducto = async (id) => {
  try {
    const respuesta = await fetch(
      "https://sofifregona.github.io/Sofia-tienda-de-ropa/db.json"
    );
    const data = await respuesta.json();
    const productoEncontrado = data.productos.find(producto => producto.id === id);
    console.log(productoEncontrado)
    return productoEncontrado
  } catch (error) {
    return console.log(error);
  }
};

export const productoServicios = {
  listaProductos,
  detalleProducto
}
