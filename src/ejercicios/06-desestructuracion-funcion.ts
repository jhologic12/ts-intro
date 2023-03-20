export interface   Producto {
    descripcion: string;
    precio: number;
}

const telefono: Producto={
    descripcion: 'Novia A1',
    precio: 150
}

const tableta: Producto = {
    descripcion: 'I pad Air',
    precio: 250
}

export function calcularISV(productos: Producto[]): [number,number]{
    let total = 0;
    //desestructurando las propiedades de arreglo para obtener solo precio
    productos.forEach( ({precio})=>{

        total +=precio;

    });

    return [total, total*0.15];

}


const articulos =[telefono,tableta] ;


const [total, isv] = calcularISV(articulos);

console.log("Total", total);
console.log("ISV" , isv);