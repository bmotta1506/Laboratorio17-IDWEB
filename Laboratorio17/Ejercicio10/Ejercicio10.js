function cargarUsuario(callback) {
    const tiempo = Math.floor(Math.random() * (1500 - 800 +1)) + 800;
    setTimeout(() => {
        const usuario = new Usuario("Brayan", 1);
        callback(usuario);
    }, tiempo);
}
class Usuario {
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }
}
cargarUsuario ((usuario) => {
    document.getElementById("usuario").textContent = `Nombre: ${usuario.nombre}, ID: ${usuario.id}`;
});