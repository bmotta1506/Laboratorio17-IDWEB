function cargarUsuario(callback) {
    const tiempo = Math.floor(Math.random() * (1500 - 800 +1)) + 800;
    setTimeout(() => {
        const usuario = new Usuario("Brayan", 25);
        callback(usuario);
    }, tiempo);
}
class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
cargarUsuario ((usuario) => {
    document.getElementById("usuario").textContent = `Nombre: ${usuario.nombre}, Edad: ${usuario.edad}`;
});