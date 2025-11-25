function cargarMensaje (callback) {
    setTimeout(() => {
        callback("Mensaje cargado");
    },1000);
}
cargarMensaje((msj) => {
    document.getElementById("mensaje").textContent = msj;
});