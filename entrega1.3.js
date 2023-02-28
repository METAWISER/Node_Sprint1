/** NIVEL 1 EJERCICIO 1 */

//  Funcion que retorna una Promesa que invoca resolve() y reject() 
function promesa(){
    // Retornamos nueva promesa
    return new Promise((resolve, reject) => {
        const numerosRandom = Math.floor(Math.random() * 10)
        setTimeout(() => {
            if(numerosRandom < 5){
                resolve(`El numero ${numerosRandom} es menor que 5.`)
            } else {
                reject(`El numero ${numerosRandom} es igual o mayor que 5.`)
            }  
        }, 100);
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
console.log(` \n ---NIVEL 1 EJERCICIO 2--- `);
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
/** NIVEL 2 EJERCICIO 1 */
//Objetos copiados del Nivel 2 Ejercicio 1
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const getEmployee = (id) => {
    return new Promise((resolve, reject)=>{
        const empleado = employees.find((emp)=> emp.id === id )
        if(empleado){
            resolve(empleado.name);
        } else {
            reject(new Error(`No se ha encontrado el empleado con ID ${id}`));
        }   
    });
};

getEmployee(1)
    .then((empleado) => {
        console.log(`\n ---NIVEL 2 EJERCICIO 1---`);
        console.log(empleado);
    }) .catch((error) =>{
        console.log(`\n ---NIVEL 2 EJERCICIO 1---`);
        console.log(error);
    })


/** NIVEL 2 EJERCICIO 2 */
//Funcion que recibe un objecto como parametro y devuelve su salario
const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        const salario = salaries.find((salario) => salario.id === employee.id);
        if (salario) {
            resolve(salario.salary);
        } else {
            reject(`No se encontró el salario para el empleado con id ${employee.id}`);
        }
    });
};
// Creo un objeto para pasarle como parametro a la funcion getSalary()
const empleadoUno = {id: 1, name: 'Linux Torvalds'};
// llamo la funcion que retorna el Salario del 
getSalary(empleadoUno)
    .then(salario => {
        console.log(`\n ---NIVEL 2 EJERCICIO 2---`);
        console.log(salario)})
    .catch(error => {
        console.log(`\n ---NIVEL 2 EJERCICIO 2---`);
        console.log(error)});


/** NIVEL 2 EJERCICIO 3 */
// Invoco las funciones getEmployee seguido de getSalary anidando la ejecucion de las dos promesas devolviendo el empleado y el salario 
getEmployee(1)
    .then((empleado) => {
        console.log(`\n ---NIVEL 2 EJERCICIO 3---`);
        console.log(`Empleado: ${empleado}`);
        return getSalary(empleadoUno)
    })
    .then((salario) => {
        console.log(`Salario: ${salario}`);
    })
    .catch((error) => {
        console.log(`\n ---NIVEL 2 EJERCICIO 2---`);
        console.log(error);
    });

