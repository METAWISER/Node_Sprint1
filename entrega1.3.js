/** NIVEL 1 EJERCICIO 1 */

//  Funcion que retorna una Promesa que invoca resolve() y reject() 
function promesa(){
    // Retornamos nueva promesa
    return new Promise((resolve, reject) => {
        const numerosRandom = Math.floor(Math.random() * 10)
        if(numerosRandom < 5){
            resolve(`El numero ${numerosRandom} es menor que 5.`)
        } else {
            reject(`El numero ${numerosRandom} es igual o mayor que 5.`)
        }  
    })  
}

promesa()
    .then((mensaje) => {
        //Este console.log() es para formatear 
        console.log(`\n ---NIVEL 1 EJERCICIO 1---`);
        console.log(`Esta fue la respuesta del resolve: ${mensaje}.`);
    }) 
    .catch((error) => {
        console.log(`\n ---NIVEL 1 EJERCICIO 1---`);
        console.log(`Esta fue la respuesta del reject: ${error}.`);
    })

/** NIVEL 1 EJERCICIO 2 */
console.log(`\n ---NIVEL 1 EJERCICIO 2---`);
// Arrow Fuction que recibe un parametro y una funcion de callback 
const arrowFuntion = (numero, callback) => {
        if(numero > 0) {
            callback(`El numero ${numero} es mayor que 0`)
        } else {
            callback(`El numero ${numero} es menor o igual que 0`)
        }
}

arrowFuntion(0, (mensaje) => {
   console.log(mensaje);
});


/** *********************************************************************** */
