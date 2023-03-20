let habilidades: string[] =[ 'Liderazgo', 'Trabajo en equipo','Autodidacta','Orientación a los Resultado'];

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNtal?: string;
}


const personaje: Personaje = {
    nombre: 'jhon',
    hp: 32,
    habilidades: ['liderazgo','Trabajo en equipo','Autodidacta','Orientación a los Resultado']

}

personaje.puebloNtal = 'santa marta'
console.table(personaje);