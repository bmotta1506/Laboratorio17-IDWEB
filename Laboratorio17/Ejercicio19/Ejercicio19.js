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

async function ejecutarDivision() {
    try {
        const resultado = await dividirAsync(10, 2);
        console.log("Resultado:", resultado);
    } catch (error) {
        console.error("Error:", error);
    }
}

ejecutarDivision();
