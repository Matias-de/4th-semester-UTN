// Ejercicio 1: Función Callback Básica
// Escribe una función llamada `mostrarMensaje` que acepte un mensaje como argumento y una
// función de callback. La función `mostrarMensaje` debe mostrar el mensaje y luego llamar a la
// función de callback.
function funcCallBack(){
    console.log("Hola");
}
function mostrarMensaje(mensaje, callback){
    console.log(mensaje);
    callback();
}


mostrarMensaje("Hoy es 14 de agosto", funcCallBack);

// Ejercicio 2: Callback con Retorno de Datos
// Crea una función llamada `sumarAsync` que acepte dos números y una función de callback.
// Esta función debe sumar los números y luego llamar a la función de callback con el resultado.

function funcCallBack(mensaje){
    return mensaje;
}

function sumarAsync(num1, num2, callback){
    let resultado = num1 + num2;
    console.log(callback(`Resultado de suma: ${resultado}`));
}

sumarAsync(3, 4, funcCallBack);

// Ejercicio 3: Uso de setTimeout
// Escribe una función llamada `retrasarEjecucion` que acepte una función de callback y un
// número de milisegundos. La función debe llamar al callback después de la cantidad
// especificada de tiempo utilizando `setTimeout`

function callbackAsincrono(){
    console.log("Ejecutándose luego de segundos...")
}
function retrasarEjecucion(callback, milisegundos){
    setTimeout(callback, milisegundos);
}

retrasarEjecucion(callbackAsincrono, 3000);


// Ejercicio 4: Callback Anidado
// Crea una función llamada `obtenerDatosUsuario` que simule una solicitud HTTP para obtener
// datos de usuario. Esta función debe aceptar un ID de usuario y una función de callback. Luego,
// dentro de la función, debes simular una solicitud a una API y, cuando se complete, llamar a la
// función de callback con los datos del usuario.


function obtenerDatosUsuario(idUsuario,callback){
    console.log("Buscando datos...");
    let usuario={
        idUsuario:idUsuario,
        nombre:"Carlos",
        apellido:"Roberto"
    }
    console.log(callback(usuario));
}

obtenerDatosUsuario(1, funcCallBack);

// Ejercicio 5: Promesas y Callbacks
// Modifica el ejercicio 4 para que en lugar de utilizar callbacks, utilice promesas para manejar la
// solicitud de datos de usuario

let miPromesa = new Promise((resolver, rechazar, datosUsuario) =>{
    let expresion = true;
    if(expresion){
        resolver(datosUsuario);
    }else{
        rechazar("Se produjo un error");
    }
});
function obtenerDatosUsuarioPeroConPromesa(idUsuario, promesa){
    console.log("Buscando datos...");
    let usuario={
        idUsuario:idUsuario,
        nombre:"Carlos",
        apellido:"Roberto"
    }
    promesa.then(valor=> console.log(usuario), error=> console.log(error));

}
obtenerDatosUsuarioPeroConPromesa(5, miPromesa);