// 1. Crear un Objeto Literal
// • Crea un objeto literal llamado “persona” con las propiedades “nombre”,
// “edad” y “profesión”. Asigna valores a cada propiedad y muestra el objeto
// en la consola.
let persona = {
    nombre: "Carlos",
    edad: 25,
    profesión: "Arquitecto"
}
console.log(persona);
// 2. Acceder a Propiedades de un Objeto
// • Accede y muestra en la consola la propiedad “nombre” del objeto
// “persona” creado en el ejercicio 1.
console.log(persona.nombre);
persona.nombre = "Roberto";
console.log(persona);
// 3. Actualizar una Propiedad de un Objeto
// • Cambia la propiedad “edad” del objeto “persona” a un nuevo valor y
// muestra el objeto actualizado en la consola.
persona.edad=40;
console.log(persona);
// 4. Eliminar una Propiedad de un Objeto
// • Elimina la propiedad “profesión” del objeto “persona” y muestra el objeto
// actualizado en la consola.
delete persona.profesión;
console.log(persona);
// 5. Agregar una Nueva Propiedad a un Objeto
// • Agrega una propiedad “email” al objeto “persona” y asígnale un valor.
// Muestra el objeto actualizado en la consola
persona.email = "robertoCarlos@gmail.com";
console.log(persona);
// 6. Crear un Array de Números
// • Crea un array llamado “numeros” que contenga los números del 1 al 5.
// Muestra el array en la consola.
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
// 7. Acceder a un Elemento de un Array
// • Accede y muestra en la consola el tercer elemento del array “numeros”
console.log(numeros[2]);
// 8. Agregar un Elemento a un Array
// • Agrega el número 6 al final del array “numeros” y muestra el array
// actualizado en la consola.
numeros.push(6);
console.log(numeros);
// 9. Eliminar el Último Elemento de un Array
// • Elimina el último elemento del array “numeros” y muestra el array
// actualizado en la consola
let numEliminado = numeros.pop();
console.log(numEliminado);
console.log(numeros);
// 10. Recorrer un Array con un Bucle
// • Usa un bucle “for” para recorrer el array “numeros” y muestra cada
// elemento en la consola.

for(let numero of numeros){
    console.log(`Número: ${numero}`);
}
/*11. Crear un Array de Objetos
• Crea un array llamado “productos” que contenga tres objetos, cada uno
con las propiedades “nombre” y “precio”. Muestra el array en la consola.*/
function Producto(nombre, precio){
    this.nombre=nombre;
    this.precio=precio;
}
let producto1 = new Producto("Producto1", 2500);
let producto2 =  new Producto("Producto2", 500);
let producto3 = new Producto("Producto3", 100)
const productos = [
     producto1, producto2, producto3
];
console.log(productos);

// 12. Acceder a un Valor Dentro de un Array de Objetos
// • Accede y muestra en la consola el precio del primer producto en el array
// “productos”.
console.log(productos[0].precio);

// 13. Actualizar una Propiedad en un Array de Objetos
// • Cambia el precio del segundo producto en el array “productos” a un
// nuevo valor y muestra el array actualizado en la consola

productos[1].precio = 400;
console.log(productos);

// 14. Eliminar un Elemento de un Array
// • Elimina el primer producto del array “productos” y muestra el array
// actualizado en la consola.
productos.shift();
console.log(productos);

// 15. Buscar un Elemento en un Array de Objetos
// • Usa el método “find” para buscar un producto cuyo nombre sea
// "Producto2" en el array “productos” y muestra el producto encontrado en
// la consola.
const resultado = productos.find((producto)=> producto.nombre ==="Producto2");
console.log(resultado);

// 16. Ordenar un Array de Números
// • Ordena el array “numeros” en orden ascendente y muestra el array
// ordenado en la consola.

productos.sort((a, b) => a.precio - b.precio);
console.log(productos);

// 17. Filtrar un Array de Números
// • Usa el método “filter” para crear un nuevo array que contenga solo los
// números mayores que 3 en el array “numeros” y muestra el nuevo array
// en la consola.

 const numerosFiltrados = numeros.filter((numero)=> numero>3);
console.log(numerosFiltrados);

// 18. Crear un Objeto Literal Anidado
// • Crea un objeto “empresa” con las propiedades “nombre”, “ubicación” y
// un objeto anidado “empleados” que tenga una propiedad “cantidad”.
// Muestra el objeto “empresa” en la consola.

let empresa = {
    nombre: "Argentina S.R.L",
    ubicacion:"Buenos Aires",
    empleados:{
        cantidad: 400
    }
}
console.log(empresa);

// 19. Acceder a un Valor en un Objeto Anidado
// • Accede y muestra en la consola la cantidad de empleados del objeto
// “empresa”

console.log(empresa.empleados.cantidad);

// 20. Combinar Arrays
// • Crea dos arrays, “array1” y “array2”, y usa el método “concat” para
// combinarlos en un solo array llamado “arrayCombinado”. Muestra
// “arrayCombinado” en la consola.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayCombinado = array1.concat(array2);
console.log(arrayCombinado);
