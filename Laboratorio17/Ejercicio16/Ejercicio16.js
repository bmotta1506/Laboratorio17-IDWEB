function procesarLista(numeros) {
    const promesas = numeros.map((num) => {
        return new Promise((resolve) => {
            const tiempo = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;

            setTimeout(() => {
                console.log(`Procesando ${num}...`);
                resolve();
            }, tiempo);
        });
    });

    return Promise.all(promesas)
        .then(() => "Proceso completado");
}

procesarLista([1, 2, 3, 4])
    .then((mensaje) => {
        console.log(mensaje);
    });
