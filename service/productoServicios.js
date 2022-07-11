const listaProductos = async () => {
  try {
    const respuesta = await fetch(
      "https://sofia-tienda-de-ropa.herokuapp.com/productos"
    );
    return await respuesta.json();
  } catch (error) {
    return console.log(error);
  }
};

const detalleProducto = async (id) => {
  try {
    const respuesta = await fetch(
      `https://sofia-tienda-de-ropa.herokuapp.com/productos/${id}`
    );
    return await respuesta.json();
  } catch (error) {
    return console.log(error);
  }
};

export const productoServicios = {
  listaProductos,
  detalleProducto
}