
// NIVEL 1 y 2.1 
// EJERCICIO 1 y 2.1 Funcion que muestra nombre y apellido usando template literal
const nombre = 'Carlos';
const apellido = 'Zamora';

const mostrarUsuario = (nombre, apellido) => {
    console.log(`Hola tu nombre es: ${nombre} ${apellido}`);
}

mostrarUsuario(nombre, apellido);
/** **************************************************************************** */
// NIVEL 2 
// EJERCICIO 2.2 Invocar Funcion que retorne un valor desde una template literal
const saludar = (nombre) => {
    return `Hola ${nombre}`
}

console.log(`Mensaje de saludo: ${saludar(nombre)}!`)

/** ***************************************************************************** */
// Creo Matriz de 10 Funciones
const funciones = [];
for(let i = 0; i < 10; i++) {
// Creo Funcion que cuente del 0 al 9
const contar = () => {
    for(let j = 0; j < 10; j++) {
        console.log(j);
    }
  };

// Agrego la funcion a la matriz 
    funciones.push(contar);
}

// Invoco cada funcion de la matriz iterativamente
for(let k = 0; k < 10; k++) {
    
}