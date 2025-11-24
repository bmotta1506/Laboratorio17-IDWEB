try {
    let x=null;
    console.log(x.name);
}
catch(e) {
    if(e instanceof TypeError) {
        console.log("Tipo de error: TypeError");
        console.log("Mensaje de error:", e.message);
    }
    else if(e instanceof ReferenceError) {
        console.log("Tipo de error: ReferenceError");
        console.log("Mensaje de error:", e.message);
    }
    else if(e instanceof SyntaxError) {
        console.log("Tipo de error: SyntaxError");
        console.log("Mensaje de error:", e.message);
    }
    else {
        console.log("Error General");
        console.log("Mensaje de error:", e.message);
    }
}