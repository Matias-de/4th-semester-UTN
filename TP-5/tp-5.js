let arr = [1, 2, 3, 4, 5];
console.log(arr);

// Escribir la función range que tome dos argumentos,
// start y end y retorne un arreglo conteniendo todos los numeros desde start hasta end inclusive.

function rango(inicio, fin, salto = 1) {
  let auxArreglo = [];
  if (salto > 0) {
    for (let i = inicio; i <= fin; i += salto) {
      auxArreglo.push(i);
    }
  } else if (salto < 0) {
    for (let i = inicio; i >= fin; i += salto) {
      auxArreglo.push(i);
    }
  }

  return auxArreglo;
}
console.log(rango());

//Escribir la función sum que reciba un array y retorne la sumatoria de sus elementos.
function sum(arreglo) {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  return suma;
}
console.log(rango(1, 10));
console.log(sum(rango(1, 10)));
console.log(rango(5, 2, -1));
//escribir reverseArray y reverseArrayInPlace.
function reverseArray(array) {
  let arregloAux = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arregloAux.push(array[i]);
  }
  return arregloAux;
}
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
console.log(myArray);
function reverseArrayInPlace(array) {
  arrAux = reverseArray(array);
  for (let i = 0; i < arrAux.length; i++) {
    array.shift();
    array.push(arrAux[i]);
  }
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

// Escribir las funciones **arrayToList**, **listToArray**, **prepend** y **nth**.

// *“the nth element” significa “el enésimo elemento”*

// arrayToList(array) debe recibir un arreglo y retornar un objeto como en el ejemplo.

// listToArray(list) debe retornar un arreglo a partir de una lista.

// prepend(element, list) es una funcion auxiliar para insertar un elemento al comienzo de una lista.

// nth(list, index) debe retornar el elemento en el índice suscripto o undefined si no se encuentra. Esta es una buena oportunidad para hacer una version recursiva de nth.
// let lista = {
//     valor: 1,
//         siguiente: {
//     valor: 2,
//         siguiente: {
//     valor: 3,
//         siguiente: null
//       }
//     }
// };

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], next: list };
  }

  return list;
}
console.log(arrayToList([10, 20]));

function listToArray(list) {
  let arr = [];
  while (list) {
    arr.push(list.value);
    list = list.next;
  }
  return arr;
}

console.log(listToArray(arrayToList([10, 20, 30])));

//listToArray
function prepend(elemento, lista) {
  return { value: elemento, next: lista };
}

console.log(prepend(10, prepend(20, null)));

function nth(list, index) {
  let retorno = null;
  if (!list) {
    retorno = undefined;
  } else if (index === 0) {
    retorno = list.value;
  } else {
    retorno = nth(list.next, index - 1);
  }
  return retorno;
}

console.log(nth(arrayToList([10, 20, 30]), 1));

//deepequal

function deepEqual(x, y) {
    let rta = false; 

    if (typeof x == "object" && x != null) {
        if (typeof y == "object" && y != null) {

            for (let key of Object.keys(x)) {
                if (Object.hasOwn(y, key)) {
                    if (typeof x[key] == "object" && typeof y[key] == "object") {
                        rta = deepEqual(x[key], y[key]);
                    } else {
                        rta = (x[key] === y[key]);
                    }
                }
                if (!rta) {
                    return rta;
                }
            }
        }
    } else {
        rta = (x === y);
    }

    return rta;
}


let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, { here: 1, object: 2 }));

console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));



class Vector{
    constructor(x, y){
      this.x = x;
      this.y = y;
    }
    plus(vector){
      return new Vector(this.x + vector.x, this.y + vector.y);
    }
    minus(vector){
      return new Vector(this.x -vector.x, this.y -vector.y);
    }
    get length(){
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }

}


console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// {x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// {x: -1, y: -1}
console.log(new Vector(3, 4).length);
// 5