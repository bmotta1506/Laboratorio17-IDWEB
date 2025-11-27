function procesarLista(numeros, callbackFinal) {
    let procesados = 0; 

    numeros.forEach((num) => {
        const tiempo = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;

        setTimeout(() => {
            console.log(`Procesando ${num}...`);
            procesados++;

            if (procesados === numeros.length) {
                callbackFinal("Proceso completado");
            }

        }, tiempo);
    });
}

procesarLista([1, 2, 3, 4], (mensaje) => {
    console.log(mensaje);
});
