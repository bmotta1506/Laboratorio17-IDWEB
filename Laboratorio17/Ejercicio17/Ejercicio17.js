async function CargarMensaje() {
    return await new Promise((resolve) => {
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
        console.error("Error:", error);
    });
