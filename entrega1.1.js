
// NIVEL 1 y 2.1 
// EJERCICIO 1 y 2.1 Funcion que muestra nombre y apellido usando template literal
const nombre = 'Carlos';
const apellido = 'Zamora';

const mostrarUsuario = (nom, cognom) => {
    console.log(`Hola tu nombre es: ${nom} ${cognom}`);
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
// NIVEL 3 EJERCICIO 1 
// Creo Matriz de 10 Funciones
const funciones = [];
for(let i = 0; i < 10; i++) {
// Creo Funcion que cuente del 0 al 9
const contar = () => {
    for(let j = 0; j < 10; j++) {
        console.log(j);
    }
  };

// Agrego las funciones a la matriz 
    funciones.push(contar);
}

// Invoco cada funcion de la matriz iterativamente
for(let k = 0; k < funciones.length; k++) {
    console.log(`Funcion: ${k}`)
    funciones[k]()
}
/********************************************************************************** */
// NIVEL 3 EJERCICIO 2
// Creo Funcion autoinvocable que muestra el nombre de usuario que he pasado como parametro
const mostrarNombreDeUsuario = ((nombreDeUsuario) => {
    console.log(`El Nombre del Usuario es: ${nombreDeUsuario} `)
})('Pedro Perez');