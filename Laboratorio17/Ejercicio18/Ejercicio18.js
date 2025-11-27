function cargarUsuario() {
    console.log("Cargando usuario...");
    return new Promise((resolve, reject) => {

        const tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;

        setTimeout(() => {
            const usuario = {
                id: 1,
                nombre: "Brayan"
            };

            resolve(usuario);
        }, tiempo);
    });
}

async function mostrarUsuario() {
    try {
        const user = await cargarUsuario();
        console.log(`Usuario cargado: ${user.nombre} (ID: ${user.id})`);
    } catch (error) {
        console.error("Error al cargar usuario:", error);
    }
}

mostrarUsuario();
