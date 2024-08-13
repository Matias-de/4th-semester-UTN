
//1-
let nombre = "Matias";
console.log(nombre);
//2-
let num1 = 10;
let num2 = 5;
console.log("Resultado suma: ", (num1 + num2));
//3-
const numeroPi = Math.PI;
console.log("Numero PI: ", numeroPi);

//Funciones; Function
//4-
function saludar(nombre) {
    return `Saludos ${nombre}!, Espero disfrutes este día..`;
}
console.log(saludar(nombre));

//5-
function esPar(numero) {
    let rta = false;
    if (numero % 2 == 0) {
        rta = true;
    }
    return rta;
}
console.log(`el numero es par? ${esPar(5)} `);
console.log(`el numero es par? ${esPar(2)} `);

function sumarElementos(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}
let arregloNumeros = [5, 3, 1];
let rta = sumarElementos(arregloNumeros);
console.log(rta);

//objetos literales y constructores
//7-
// const persona = {
//     nombre: "Carlos",
//     edad: 20,
//     profesion: "Arquitecto"
// };
// console.log(persona);
//8
function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;

}
const producto1 = new Producto("Teléfono", 2000, 250);
console.log(producto1);
const producto2 = new Producto("Monitor", 10000, 2000);
console.log(producto2);

//9-
function Pelicula(titulo = "", director = "", año = 0) {
    this.titulo = titulo;
    this.director = director;
    this.año = año;
}
const pelicula1 = new Pelicula("Cars 1", "Disney", 2005);
console.log(pelicula1);
const pelicula2 = new Pelicula();
console.log(pelicula2);

//Arrays
//10-
const arregloFrutas = ["banana", "manzana", "pera", "naranja", "mandarina"];
console.log(arregloFrutas[3]);
//11
arregloFrutas.push("Uva");
console.log(arregloFrutas);
//12
function filtrarPares(arregloNumeros) {
    let arrayPares = [];
    for (let i = 0; i < arregloNumeros.length; i++) {
        if (arregloNumeros[i] % 2 == 0) {
            arrayPares.push(arregloNumeros[i]);
        }
    }

    return arrayPares;
}

arregloNumeros = [25, 54, 6, 21, 2, 65];
let arregloPares = filtrarPares(arregloNumeros);
console.log(arregloPares);

//funciones y objetos literales
//13-
// function crearPersona(nombre, edad) {
//     let persona = {
//         nombre: nombre,
//         edad: edad
//     };
//     return persona;
// }
//14
// function obtenerInfo(persona) {
//     return `Persona: 
//     Nombre: ${persona.nombre}
//     Edad: ${persona.edad}`;
// }
// let persona1 = crearPersona("Carlos", 45);
// console.log(obtenerInfo(persona1));

//arrays y funciones
//15

function duplicarArray(arrayNumeros) {
    let arregloDuplicado = [];
    for (let i = 0; i < arrayNumeros.length; i++) {
        arregloDuplicado[i] = arrayNumeros[i];
    }
    return arregloDuplicado;
}
let arregloDuplicado = duplicarArray([5, 3, 1]);
console.log(arregloDuplicado);

//16-
function invertirCadena(cadena) {
    let arregloCadena = cadena.split("");
    let arregloInvertido = arregloCadena.reverse();
    let invertida = arregloInvertido.join("");
    return invertida;

}
const cadenaInvertida = invertirCadena("hola");
console.log(cadenaInvertida);

//17-
function filtrarPorLongitud(arrayPalabras, minLongitud) {
    let arrayFiltrado = [];
    for (let i = 0; i < arrayPalabras.length; i++) {
        if (arrayPalabras[i].length > minLongitud) {
            arrayFiltrado.push(arrayPalabras[i]);
        }
    }
    return arrayFiltrado;
}
const arrayPalabras = ["hola", "como", "estas"];
const arrayFiltrado = filtrarPorLongitud(arrayPalabras, 4);
console.log(arrayFiltrado);

//objetos y arrays de objetos
//18-
function Estudiante(nombre="", edad=0, promedio=0){
    this.nombre=nombre;
    this.edad=edad;
    this.promedio=promedio;

}

let arrayEstudiantes = [
    new Estudiante("Matias", 19, 8.76),
    new Estudiante("Jose", 25, 6.677),
    new Estudiante("Maria", 18, 9.33)
];
console.log(arrayEstudiantes);

//19-
function buscarEstudiante(arrayEstudiantes, nombre){
    let estudianteABuscar;
    for(let estudiante of arrayEstudiantes){
        if(estudiante.nombre === nombre){
            estudianteABuscar = estudiante;
        }
    }
    return estudianteABuscar;
}

let estudianteBuscado = buscarEstudiante(arrayEstudiantes, "Matias");
console.log(estudianteBuscado);

//20-

function promedioClase(arrayEstudiantes){
    let sumaPromedios=0;
    for(let estudiante of arrayEstudiantes){
        sumaPromedios += estudiante.promedio;
    }

    return sumaPromedios / arrayEstudiantes.length;
}
console.log("Promedio de la clase: ", promedioClase(arrayEstudiantes));

//Uso avanzado de Objetos y Funciones
//21-
let coche ={
    marca:"Audi",
    modelo:"A4",
    año:2005,
    arrancar: ()=>{
        return `BROOOMMMMM`;
    },
    detener: ()=>{
        return `*frena*`;
    }
};
console.log(coche);
console.log(coche.arrancar());
console.log(coche.detener());

//22
function Persona(nombre, edad){
    this.nombre=nombre;
    this.edad=edad;
    this.saludar = function(){
        return `Hola soy ${this.nombre} y te deseo una buena tarde`;
    
    }
}

let persona4 = new Persona("Carlos", 25);
console.log(persona4);
console.log(persona4.saludar());

//23

function Carrito(){
    this.arregloProductos=[];
    this.agregarProducto= function(producto){
        this.arregloProductos.push(producto);
    }
}

let carrito1 = new Carrito();
console.log(carrito1);
carrito1.agregarProducto(producto2);
console.log(carrito1);
carrito1.agregarProducto(producto1);
console.log(carrito1);

//manipulacion de Arrays y Objetos
//24
function comparar(a, b) {
    return a - b;
}
function ordenarNumeros(arrayNumeros){
    let arrayOrdenado = arrayNumeros.sort(comparar);
    return arrayOrdenado;
}
let arrayOrdenado = ordenarNumeros([61, 24, 31, 5, 1, 7, 90]);
console.log(arrayOrdenado);

//25-
function eliminarEstudiante(arrayEstudiantes, nombre){
    let arregloSinAlumno=[];
    for(estudiante of arrayEstudiantes){
        if(estudiante.nombre !== nombre){
            arregloSinAlumno.push(estudiante);
        }
    }
    return arregloSinAlumno;

}

let arregloSinAlumno = eliminarEstudiante(arrayEstudiantes, "Maria");
console.log(arregloSinAlumno);

//26-
function totalCarrito(arrayProductos){
    let sumaProductos=0;
    for(producto of arrayProductos){
        sumaProductos+=producto.precio;
    }

    return sumaProductos;
}

let totalCompra = totalCarrito(carrito1.arregloProductos);
console.log(totalCompra);

//Uso avanzado de Funciones y Objetos
//27-
function crearCalculadora(num1, num2){
    let calculadora ={
        num1:num1,
        num2:num2,
        sumar: ()=>{
            return num1 + num2;
        },
        restar: ()=>{
            return num1 - num2;
        },
        multiplicar: ()=>{
            return num1 * num2;
        },
        dividir: ()=>{
            return num1/num2;
        }
    }
    return calculadora;
}

let calculadora1 = crearCalculadora(5, 3);
console.log(calculadora1.dividir());

//28-
function crearCuentaBancaria() {
    let cuentaBancaria = {
        saldo: 0,
        depositar: function(dinero) {
            this.saldo += dinero;
        },
        retirar: function(dinero) {
                this.saldo -= dinero;
        },
        consultarSaldo: function() {
            return this.saldo;
        }
    };
    return cuentaBancaria;
}

let cuenta = crearCuentaBancaria();
cuenta.depositar(1000);
console.log(cuenta.consultarSaldo());
cuenta.retirar(500);
console.log(cuenta.consultarSaldo());

//29
function Libro(titulo, autor, paginas){
    this.titulo=titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.detalles = function(){
        return `Libro: {Titulo: ${this.titulo},
        Autor: ${this.autor},
        Páginas: ${this.paginas}};`
    };
}

let libro1 = new Libro("Nose", "hola123", 500);
console.log(libro1.detalles());

//FizzBuzz

function FizzBuzz(){
    for(let i = 0; i<=100; i++){
        if(i%5==0 && i%3==0){
            console.log(`Numero: ${i}, FizzBuzz`);
        }else if(i%5==0){
            console.log(`Numero: ${i}, Buzz`);
        }else if(i%3==0){
            console.log(`Numero: ${i}, Fizz`);
        }
    }
}
FizzBuzz();


//30

console.log("---------------------------TO-DO-LIST---------------------------");
class Tarea{
    constructor(detalle, diasParaCompletar){
        this._detalle = detalle;
        this._diasParaCompletar = diasParaCompletar;
        this._completada=false;
    }
    get completada(){
        return this._completada;
    }
    get detalle(){
        return this._detalle;
    }
    get diasParaCompletar(){
        return this._diasParaCompletar;
    }
    set detalle(detalle){
        this._detalle = detalle;
    }
    set diasParaCompletar(diasParaCompletar){
        this._diasParaCompletar = diasParaCompletar;
    }

    completarTarea(){
        this._completada = true;
        return "Tarea completada con exito.";    
    }

    toString(){
       return `Tarea: {Detalle: ${this._detalle}, Dias para Completarla: ${this._diasParaCompletar}, Completada: ${this._completada}}`
    }

}

class GestorDeTareas{
    constructor(){
        this._arrayTareas = [];
    }
    get arrayTareas(){
        return this._arrayTareas;
    }
    agregarTarea(tarea){
        this._arrayTareas.push(tarea);
        return "Tarea añadida con éxito";
    }

    marcarTareaCompletada(detalle){
        let texto="Tarea no encontrada";
        for(let tarea of this._arrayTareas){
            if(tarea.detalle === detalle){
                texto=tarea.completarTarea();
            }
        }
        return texto;
    }
    listarTareasPendientes(){
        let texto="";
        for(let tarea of this._arrayTareas){
            if(!tarea.completada){
                texto+=tarea;
            }
        }
        return texto;
    }
    toString(){
        return `Gestor De Tareas: Tareas:[${this._arrayTareas}];`
    }
}

let toDoList = new GestorDeTareas();
toDoList.agregarTarea(new Tarea("Hacer la cama", 1));
console.log(toDoList.toString());
console.log(toDoList.marcarTareaCompletada("Hacer la cama"));
console.log(toDoList.toString());
toDoList.agregarTarea(new Tarea("Comprar comida para el perro", 1));
toDoList.agregarTarea(new Tarea("Promocionar la cursada", 70));
toDoList.agregarTarea(new Tarea("Cobrar Seguro", 30));
console.log(toDoList.toString());
console.log(toDoList.marcarTareaCompletada("hola"));
console.log(toDoList.marcarTareaCompletada("Comprar comida para el perro"));
console.log(toDoList.listarTareasPendientes());


