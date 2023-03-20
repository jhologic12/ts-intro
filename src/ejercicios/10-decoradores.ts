
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }

  @reportableClassDecorator
  class miSuperClase {
    public miPropiedad: string ='ABC1223';

    imprimir(){
        console.log('hola mundo');
    }
  }


console.log( miSuperClase);

const miClase = new miSuperClase();

console.log(miClase.miPropiedad);
console.log(miClase.imprimir());