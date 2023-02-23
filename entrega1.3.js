/** NIVEL 1 EJERCICIO 1 y 2 */
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
        console.log(`Esta fue la respuesta del resolve: ${mensaje}.`);
    }) 
    .catch((error) => {
        console.log(`Esta fue la respuesta del reject: ${error}.`);
    })

// Arrow Fuction 
const arrowFuntion = (numero, callback) => {
    
}
/** *********************************************************************** */
