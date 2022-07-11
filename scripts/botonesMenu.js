const botones = document.querySelecotrAll(".filtro-producto");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        console.log("Hice click")
    })
})