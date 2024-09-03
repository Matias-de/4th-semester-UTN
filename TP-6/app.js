//Crea una función multiplicar que acepte dos números y un callback.
const multiplicar = (num1, num2, callback)=>{
    return callback(num1, num2);
}

let resultadoMultiplicacion = multiplicar(10, 5, (num1, num2) => {return num1*num2;});
console.log(resultadoMultiplicacion);

//Usa el callback para mostrar el resultado de multiplicar los dos números
let mostrarMulti = multiplicar(10, 5, (num1, num2) => console.log(num1*num2));


// Define una función operarNumeros que acepte dos números y un callback.
const operarNumeros = (num1, num2, callback)=>{
    return callback(num1, num2);
}
//Crea dos callbacks, uno para sumar y otro para restar los números.

let sumar = operarNumeros(3, 6, (num1, num2)=> num1+num2);
let restar = operarNumeros(8, 6, (num1, num2)=> num1-num2);
console.log(`Resultado sumar: ${sumar}
Resultado restar: ${restar}`);

//Usa setTimeout para imprimir "Esto es un callback" después de 2 segundos

let callbackAsync = setTimeout(()=> console.log("Esto es un callback"), 2000);

// Define una función filtrarPares que acepte un array de números y un callback
const arrayNumeros = [1, 2, 3, 4, 5, 6];
const filtrarPares = (arrayNumeros, callback) =>{
    return callback(arrayNumeros);
};
// Usa el callback para filtrar solo los números pares.

let numPares = filtrarPares(arrayNumeros, (array) =>{
    return array.filter(numero => numero %2 ==0)
});

console.log(numPares);

// Crear y manipular un Set:
// Crea un Set con los números 1, 2, 3, 4, y 5

let miSet = new Set([1, 2, 3, 4, 5]);
console.log(miSet);

// Añade el número 6 y elimina el número 3.
miSet.delete(3);
miSet.add(6);
console.log(miSet);

//  Convierte el Set del ejercicio anterior en un array.
let arrayDeSet = [...miSet];
console.log(arrayDeSet);

// Dado un array [1, 2, 2, 3, 4, 4, 5], elimina los duplicados utilizando un Set

let array2 = [1, 2, 2, 3, 4, 4, 5];
let setDeArray = new Set([1, 2, 2, 3, 4, 4, 5]);
array2 = [...setDeArray];
console.log(array2);

// Comprobar existencia en un Set:
// o Comprueba si el número 4 existe en el Set creado anteriormente y muestra el
// resultado.

console.log(miSet.has(4));

// Iterar sobre un Set:
//  Itera sobre el Set creado en el ejercicio 6 e imprime cada número.

miSet.forEach((num) => console.log(num));


// Ejercicios sobre Map
// 11. Crear y manipular un Map:
// Crea un Map con tres entradas: "nombre" -> "Juan", "edad" -> 30, "ciudad" ->
// "Madrid".
// Añade una nueva entrada para "país" -> "España" y elimina la entrada
// "ciudad".

let persona = new Map([["nombre", "Juan"],["edad", 30], ["ciudad", "Madrid"]]);
persona.set("pais", "España");
persona.delete("ciudad");
console.log(persona);

// Accede al valor de "nombre" en el Map creado y muéstralo.

console.log(persona.get("nombre"));

// Itera sobre las entradas del Map e imprime cada par clave-valor

for (let [clave, valor] of persona) {
    console.log(`${clave} -> ${valor}`);
}

// Comprueba si el Map tiene la clave "edad" y muestra el resultado
console.log(persona.has("edad"));

// Convierte el Map creado en el ejercicio 11 a un array de arrays.

const arrDeMap = [...persona];
console.log(arrDeMap);


// Ejercicios sobre Arrays y Métodos de Array
// 16. Filtrar números mayores que 10:
// Dado un array [5, 10, 15, 20, 25], usa filter para obtener los números mayores
// que 10.

let arrAFiltrar = [5, 10, 15, 20, 25];
console.log(arrAFiltrar.filter(numero => numero >10));


// 17. Doblar los números en un array:
//  Usa map para crear un nuevo array donde cada número en el array [1, 2, 3, 4, 5, 6] se ha doblado.

let arr3 = arrayNumeros.map((num)=> num*2);
console.log(arr3);

// 18. Convertir un array de nombres a mayúsculas:
//  Dado un array ["juan", "maria", "pedro"], usa map para convertir cada nombre
// a mayúsculas.

let arrNombres = ["juan", "maria", "pedro"];

console.log(arrNombres.map((nombre) => nombre.toUpperCase()));

// 19. Filtrar palabras cortas:
// o Dado un array ["árbol", "casa", "elefante", "sol"], usa filter para obtener las
// palabras con menos de 5 letras.
const arrPalabras = ["árbol", "casa", "elefante", "sol"];
console.log(arrPalabras.filter((palabra)=> palabra.length < 5));

// 20. Sumar números pares en un array:
// o Dado un array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], usa filter para obtener los números
// pares y luego utiliza reduce para sumarlos.
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr4.filter((num)=> num % 2 == 0).reduce((acumulador, num) => acumulador + num, 0));

// Ejercicios avanzados
// 1. Transformar objetos usando map:
//  Dado un array de objetos [{ nombre: "Juan", edad: 20 }, { nombre: "María",
// edad: 25 }, { nombre: "Pedro", edad: 30 }], usa map para crear un nuevo array
// de strings que contenga solo los nombres.

const arrayObjetos = [{ nombre: "Juan", edad: 20 }, { nombre: "María", edad: 25 }, { nombre: "Pedro", edad: 30 }];
const arrayNombres = arrayObjetos.map((persona)=> persona.nombre);
console.log(arrayNombres);

// 2. Filtrar objetos en un array:
// Dado un array de objetos [{ nombre: "Carlos", edad: 17 }, { nombre: "Ana",
// edad: 23 }, { nombre: "Luis", edad: 16 }], usa filter para obtener solo los objetos
// donde la persona sea mayor de edad (edad >= 18).

const arrayPersonas = [{ nombre: "Carlos", edad: 17 }, { nombre: "Ana", edad: 23 }, { nombre: "Luis", edad: 16 }];

console.log(arrayPersonas.filter((persona)=> persona.edad>=18));


// 3. Contar elementos únicos en un array usando Map:
//  Dado un array de números [2, 3, 4, 2, 3, 5, 4, 5, 6], utiliza un Map para contar
// cuántas veces aparece cada número en el array. El resultado debe ser un Map
// donde las claves sean los números del array y los valores sean la cantidad de
// veces que cada número aparece.

const numeros = [2, 3, 4, 2, 3, 5, 4, 5, 6];
const conteos = {};

numeros.map(num => {
    conteos[num] = (conteos[num] || 0) + 1;
    return num;
});
const resultado = new Map(Object.entries(conteos));
console.log(resultado);

// 4. Encadenamiento de métodos de array:
//  Dado un array de números [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], usa una combinación de
// filter, map, y reduce para obtener la suma de los cuadrados de los números
// pares

console.log(arr4.filter((n)=> n % 2 == 0).map((n)=> n**2).reduce((acumulador, num) => acumulador + num, 0));

// 5. Transformar un objeto en un Map:
//  Dado un objeto { a: 1, b: 2, c: 3 }, transforma el objeto en un Map donde las
// claves son las propiedades del objeto y los valores son los valores
// correspondientes.

let obj = { a: 1, b: 2, c: 3 };
const mapita = new Map(Object.entries(obj));
console.log(mapita);

// 6. Crear un objeto a partir de un Map:
// o Dado un Map que contiene [["nombre", "Pedro"], ["edad", 30], ["ciudad",
// "Sevilla"]], convierte este Map en un objeto.

const mapita2 = new Map([["nombre", "Pedro"], ["edad", 30], ["ciudad", "Sevilla"]]);
// console.log(mapita2);
const obj2 = Object.fromEntries(mapita2); //chiche

// const obj2 ={
//     nombre: mapita2.get("nombre"),
//     edad: mapita2.get("edad"),
//     ciudad: mapita2.get("ciudad")
// }
console.log(obj2);


