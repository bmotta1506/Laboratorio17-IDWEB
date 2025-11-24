const validarEdad = (edad) => {
    if(!(edad > 0)){
        throw new Error("Edad invalida");
    }
}
try {
    validarEdad(-5);
}
catch(e) {
    console.log(e.message);
}