const botones = document.querySelectorAll(".filtro-producto");

botones.forEach((boton) => {
    boton.addEventListener("click", (event) => {
        let categoria = event.target.id;
        if (categoria === "ver-todo"){
            categoria = "";
            window.location.href = `index.html`
        }
        window.location.href = `index.html?categoria=${categoria}`;
    })
})