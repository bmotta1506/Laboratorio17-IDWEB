function cargarUsuario() {
    console.log("Cargando usuario...");
    return new Promise((resolve, reject) => {
        const tiempo = Math.floor(Math.random() * (1500 - 800 +1)) + 800;
        setTimeout(() => {
            const usuario = { nombre: "Brayan", id: 1 };
            resolve(usuario);
        }, tiempo);
    })
}
cargarUsuario()
    .then((usuario) => {
        console.log(`Nombre: ${usuario.nombre}, ID: ${usuario.id}`);
    })
    .catch((error) => {
        console.error("Error al cargar el usuario:", error);
    });