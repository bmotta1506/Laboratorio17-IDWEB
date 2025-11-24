try {
    let textp = "{nombre: 'Juan', edad: 30}";
    let obj = JSON.parse(textp);
    console.log("Objeto: ", obj);
}
catch(e) {
    console.log("Error al convertir JSON:", e.message);
    console.log("Nombre del error", e.name);
}