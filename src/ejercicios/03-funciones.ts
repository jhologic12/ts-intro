function sumar (a:number,b:number ):number{
    return a+b;
}

const resultado = sumar(1,8);

const sumarFecha = (a:number,b:number):number => {
    return a + b;
}


function multiplicar (numero:number, otronumero?:number , base:number = 4):number{
    return numero * base;
}
console.log (resultado);


interface PersonajeRandom {
    nombre:string,
    puntosVida: number
    mostrarPuntosVida: () => void;
}

function curar (personaje:PersonajeRandom, curarX:number):void{
    personaje.puntosVida += curarX;
    
}



const nuevoPersonaje:PersonajeRandom ={
    nombre:'Yopuka',
    puntosVida: 50,
    mostrarPuntosVida(){
        console.log('puntos de vida:', this.puntosVida);
    }
}


curar(nuevoPersonaje,20);