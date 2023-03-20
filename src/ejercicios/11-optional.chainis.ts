interface Pasajero{
    nombre:string;
    hijos?: string[];
}


const pasajero1: Pasajero= {
    nombre: 'fernando'
}


const pasajero2: Pasajero = {
    nombre: 'ALejandra',
    hijos: ['Laura', 'Camilo']
}


function imprimirHijos(pasajero: Pasajero):void{
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}


imprimirHijos(pasajero1);