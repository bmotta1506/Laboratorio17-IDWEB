function procesarNumero(num) {
    return new Promise((resolve) => {
        const tiempo = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;

        setTimeout(() => {
            console.log(`Procesando ${num}...`);
            resolve();
        }, tiempo);
    });
}

async function procesarLista(numeros) {
    for (const n of numeros) {
        await procesarNumero(n);
    }
    return "Proceso completado";
}

(async () => {
    const mensaje = await procesarLista([1, 2, 3, 4]);
    console.log(mensaje);
})();
