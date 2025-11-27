function dividirAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b === 0) {
                reject("No se puede dividir entre cero");
            } else {
                resolve(a / b);
            }
        }, 1500);
    });
}

dividirAsync(10, 2)
    .then((resultado) => {
        console.log("Resultado:", resultado);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
