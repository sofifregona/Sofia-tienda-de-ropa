
const readImagen = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
}

const listaProductos = async () => {
    try {
      const respuesta = await fetch("db.json");
        console.log(respuesta)
      return await respuesta.json();
    } catch (error) {
      return console.log(error);
    }
  };

