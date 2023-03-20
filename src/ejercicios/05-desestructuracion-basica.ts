
//Desestructuración de Objetos
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor : Reproductor = {

    volumen: 90,
    segundo: 30,
    cancion: 'sin medir distancia',
    detalles: {
        autor: 'Diomedez Diaz',
        anio: 1994
    }

}

const {volumen,segundo,cancion,detalles} = reproductor;
const {autor:author,anio} = detalles;

/* console.log('el volumen actual es: ',volumen);
console.log('el segundo actual es: ',segundo);
console.log('la canción actual es: ',cancion);
console.log('el autor  es: ',author);
 */


//Desestructuración de Arreglos

const frutas: string[] =['manzana','fresa','mora','cereza','uva'];
const [,,,,fruta]= frutas;

console.log(fruta);