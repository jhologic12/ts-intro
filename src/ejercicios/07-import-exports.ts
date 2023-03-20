import { calcularISV, Producto } from "./06-desestructuracion-funcion";


const carritoCompras : Producto [] = [

{
    descripcion: 'telefono 1',
    precio: 1200
},
{
    descripcion: 'telefono 2',
    precio: 1600
}

];


const [total , isv] = calcularISV(carritoCompras);

console.log('Total', total);
console.log('ISV', isv);