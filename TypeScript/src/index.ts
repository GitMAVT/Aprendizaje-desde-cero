let mensaje: string = "Hola mundo";

mensaje = "Hola muchachos";


mensaje = "chao mundo"
console.log(typeof []);

/* 
    tipos de JS
    - number
    - string
    - boolean
    - null
    - undefined
    - object
    - function

    tipos de TS
    - any Trata de no usar
    - unknown
    - arrays
    - tuplas
    - Enums

    tipos inferidos

*/

let extincionDinosuarios: number = 76_000_000;
let dinosuarioFavorito: string = "T-Rex";
let extintos: boolean = true;

function chanchitoFeliz (config: any)
{
    return config;
}

let animales: string[] = ['chanchito','feliz','felipe'];
let nums: number[] = [1,2,3,4];
let checks: boolean[] = [];
let nums2 : Array<number> = [];

// nums.map(x => x.) el autocompletado sugiere métodos para los tipos de datos

//Tupla

let tupla: [number, string[]] = [1, ['chanchito feliz','chanchito triste']];

const chica = 's';
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

//PascalCase
enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl'};
const enum LoadingState { Idle, Loading, Success, Error};

const estado = LoadingState.Success;

const variable1 = Talla.Grande;

//Objetos
type Direccion = 
{
    numero: number,
    calle: string,
    pais: string,
}

type Persona =
{
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion,
}

const objeto: Persona =
{ 
    id: 1,
    nombre: 'Hola Mundo',
    talla: Talla.Mediana,
    direccion:
    {
        numero: 1,
        calle: "Siempre viva",
        pais: "Chancholandia",
    }
};

const arr: Persona[] = [];

