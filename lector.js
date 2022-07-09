
const readImagen = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
}

const listaProductos = async () => {
    try {
      const respuesta = await fetch("https://sofia-tienda-de-ropa.herokuapp.com/");
        console.log(respuesta)
      return await respuesta.json();
    } catch (error) {
      return console.log(error);
    }
  };

