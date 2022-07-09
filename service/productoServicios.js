const readImagen = (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
};

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

export const productoServicios = {
  readImagen,
  listaProductos
}