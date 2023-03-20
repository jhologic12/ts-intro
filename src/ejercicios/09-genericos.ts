
//tipo genérico.
function quetipoSoy <T>(argumento: T){
    return argumento;
}


    let soystring = quetipoSoy("Hola Mundo");

    let soyentero = quetipoSoy(50);

    console.log(soyentero);
    console.log(soystring);
    