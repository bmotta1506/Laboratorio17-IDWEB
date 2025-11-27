function CargarMensaje() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Mensaje Cargado");
        }, 2000);
    });
}
CargarMensaje()
    .then((mensaje) => {
        document.getElementById("mensaje").textContent = mensaje;
    })
    .catch((error) => {
        console.error("Error al cargar el mensaje:", error);
    });