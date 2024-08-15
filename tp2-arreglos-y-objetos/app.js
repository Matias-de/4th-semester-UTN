// Arreglos con Tipos de Datos Primitivos:
// 1. Suma de Elementos: Dado un arreglo de números, calcula la suma de todos los elementos
const numeros=[1,2,3,4,5];
function sumarElementos(arreglo){
    let suma=0;
    for(let variable of arreglo){
        suma+=variable;    
    }
    
    return suma;
}
console.log(sumarElementos(numeros));

// 2. Promedio: Calcula el promedio de los números en un arreglo.
console.log(sumarElementos(numeros)/numeros.length);

// 3. Máximo y Mínimo: Encuentra el número máximo y el número mínimo en un arreglo de
// números.
numeros.sort((a,b)=>a-b); //ordenar de manera ascendente
console.log(`Numero máximo: ${numeros[numeros.length-1]}
Número minimo: ${numeros[0]}`);
    
const maximo = Math.max(...numeros);
const minimo = Math.min(...numeros);    
console.log(`Número máximo: ${maximo}`);
console.log(`Número mínimo: ${minimo}`);

//4. Buscar Valor: Escribe una función que busque un valor específico en un arreglo y devuelva su
// índice, si existe.

//solucion rapida:
console.log(numeros.findIndex((numero) => numero ==4));
//solucion lenta
function buscarValor(arreglo, valor){
    let indice = undefined;
       for(let i = 0; i<arreglo.length;i++){
        if(arreglo[i] == valor){
            indice = i;
        }
       }
    return indice;
}
console.log(buscarValor(numeros, 4));

//5. Filtrar Pares e Impares: Separa un arreglo de números en dos arreglos diferentes, uno con
// números pares y otro con números impares.
let arregloPares = numeros.filter((numero) => numero %2==0);
console.log(arregloPares);
let arregloImpares = numeros.filter((numero) => numero %2!==0);
console.log(arregloImpares);

//6. Eliminar Duplicados: Crea una función que elimine los elementos duplicados de un arreglo.
function eliminarDuplicados(arreglo){
    return [...new Set(arreglo)];
}
const arregloDuplicados = [1,2,2,3,5,6,4,3,6];
console.log(eliminarDuplicados(arregloDuplicados));

// 7. Ordenar Arreglo: Ordena un arreglo de números de forma ascendente
const arregloDesordenado = [2,4,5,76,23,2,13,3]
console.log(arregloDesordenado.sort((a,b) => a-b));

// 8. Eliminar Valor: Elimina todas las ocurrencias de un valor específico de un arreglo.

function borrarOcurrencias(arreglo, valor){
    return arreglo.filter(elemento => elemento !==valor);
}
console.log(borrarOcurrencias(arregloDesordenado, 2));

// 9. Combinar Arreglos: Combina dos arreglos en uno solo, asegurándote de que no haya
// duplicados.

const array1 = [1,2,3];
const array2 = [3,4,5,1,6];
let arrayCombinado = array1.concat(array2)
console.log(arrayCombinado);
let arrayCombinadoYSinDuplicados = eliminarDuplicados(array1.concat(array2));
console.log(arrayCombinadoYSinDuplicados);

// 10. Lista de Compras: Crea una lista de compras que incluya productos y sus cantidades

class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
class ListaCompras{
    constructor(){
        this.arregloProductos = [];
        // this.totalCompra = 0;
    }
    agregarProducto(producto){
        this.arregloProductos.push(producto);
        // this.calcularTotal();
    }
    // calcularTotal(){
    //     let total=0;
    //     for(let producto of this.arregloProductos){
    //         total += producto.precio * producto.cantidad;
    //     }
    //     this.totalCompra = total;
    // }

}

const lista1 = new ListaCompras();
lista1.agregarProducto(new Producto("Manzanas", 500, 5));
lista1.agregarProducto(new Producto("Uvas", 30, 10));
lista1.agregarProducto(new Producto("Pelota de Futbol", 2000, 1));
console.log(lista1);

// 11. Agenda de Contactos: Crea una agenda de contactos con nombres, números de teléfono y
// correos electrónicos.
class Contacto{
    constructor(nombre, numero, correo){
        this._nombre = nombre;
        this._numero = numero;
        this._correo = correo;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get numero(){
        return this._numero;
    }
    set numero(numero){
        this._numero = numero;
    }
    get correo(){
        return this._correo;
    }
    set correo(correo){
        this._correo = correo;
    }
}

class AgendaDeContactos{
    constructor(){
        this.arregloContactos = [];
    }
    guardarContacto(contacto){
        this.arregloContactos.push(contacto);
    }
}

const agenda1 = new AgendaDeContactos();
agenda1.guardarContacto(new Contacto("Carlos", 22343445, "carlos@gmail.com"));
agenda1.guardarContacto(new Contacto("Maria", 111222333, "Maria@gmail.com"));
console.log(agenda1);

// 12. Búsqueda de Palabras: Dado un párrafo y una palabra, cuenta cuántas veces aparece la
// palabra en el párrafo.
let parrafo =" Occaecat exercitation incididunt irure adipisicing magna. hola  ipsum quis excepteur aute exercitation aliquip HOLA est ex exercitation. Minim eiusmod excepteur incididunt aliquip officia ea exercitation."
let arregloAux = parrafo.split(/\W+/); //\W+ es una expresión regular que divide por cualquier cosa que no sea una letra, un número o un guion bajo (_). Esto nos permite dividir el texto en palabras, ignorando signos de puntuación y otros caracteres no alfabéticos.
console.log(arregloAux);

function buscarRepetidosParrafo(parrafo, palabra){
    let cantVeces=0;
    let arregloParrafo = parrafo.toLowerCase().split(/\W+/);
    for(let i =0; i<arregloParrafo.length; i++){
        if(arregloParrafo[i] === palabra){
            cantVeces++;
        }
    }
    
    return cantVeces;
}
console.log(buscarRepetidosParrafo(parrafo, "hola"));

//13. Clasificación de Objetos: Ordena un arreglo de objetos por una propiedad específica

//ordenar arreglo de productos creado anteriormente por la cantidad que se llevan del mismo


let arregloProductosOrdenado = lista1.arregloProductos.sort((a, b) => a.cantidad - b.cantidad);
console.log(arregloProductosOrdenado);

// 15. Carrito de Compras: Simula un carrito de compras que permite agregar, eliminar y calcular
// el total


class CarritoCompra{
    constructor(){
        this.productos = [];
        this.totalCompra = 0;
    }
    agregarProducto(producto){
        this.productos.push(producto);
        this.calcularTotal();
    }
     calcularTotal(){
         let total=0;
         for(let producto of this.productos){
             total += producto.precio * producto.cantidad;
         }
         this.totalCompra = total;
    }
    eliminarProducto(nombreProducto){
       for(let i =0; i<this.productos.length; i++){
        if(this.productos[i].nombre === nombreProducto){
            this.productos.splice(i, 1);
        }
       }
        this.calcularTotal();
    }

}
const carrito1 = new CarritoCompra();
carrito1.agregarProducto(new Producto("Resma hojas Gloria", 10000, 1));
carrito1.agregarProducto(new Producto("Lapiceras", 450, 4));
carrito1.agregarProducto(new Producto("Botella Tupperware X750Ml", 1150, 1));
console.log(carrito1);
carrito1.eliminarProducto("Lapiceras");
console.log(carrito1);
