const nivel2 = () => {
    try {
        console.log(x);
    } catch (error) {
        console.log("Error capturado en nivel 2:", error.message);
        throw error;
    }
}
const nivel1 = () => {
    try {
        nivel2();
    }
    catch (error) {
        console.log("Error capturado en nivel 1:", error.message);
        throw error;
    }
}
try {
    nivel1();
}
catch (error) {
        console.log("Error capturado en el nivel más alto:", error.message);
}