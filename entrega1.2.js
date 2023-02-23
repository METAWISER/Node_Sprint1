/** NIVEL 1 EJERCICIO 1 */
// Arrow Function autoinvocable que muestra la suma de dos numeros
console.log('---NIVEL 1 EJERCICIO 1---');
console.log(((a, b) => a + b)(17,6));

/** ********************************************************************** */
/** NIVEL 2 EJERCICIO 1 */
console.log(`\n ---NIVEL 2 EJERCICIO 1---`)
// Arrow Function que retorna un Objeto con un Atributo que tiene un valor al Parametro recibido
const anadirParametroAlObjeto = valor => ( {curso : valor} );
console.log(anadirParametroAlObjeto('Node.js'));

/** ********************************************************************** */
/** NIVEL 2 EJERCICIO 2 */
console.log(`\n ---NIVEL 2 EJERCICIO 2---`);
//Creo la Clase PERSONA
class Persona {
    constructor (nom) {
        this.nom = nom
    }
    //Metodo que muestra el nom 
    dirNom() {console.log(this.nom);} 
}
// Creo instancia de PERSONA
const persona = new Persona('Carlos Z.');
// Invoco el Metodo para mostrar el nombre por la consola 
persona.dirNom();


/** ************************************************************************ */
/** NIVEL 3 EJERCICIO 1 */
console.log(`\n ---NIVEL 3 EJERCICIO 1---`);

// Creo la clase abstracta a la que luego voy a instanciar o crear en la siguiente funcion
class ClaseAbs {
    constructor() {
        if(new.target === ClaseAbs){
            throw new TypeError('No se puede instanciar clase abstracta')
        }
        
    }
}
// Funcion Generadora de objetos de una clase abstracta
const creadorDeObj = (curso) => {
    const objCursos = Object.create(ClaseAbs.prototype);
    objCursos.curso = curso;
    return objCursos;
}
const cursoDeNode = creadorDeObj('NodeJs')
console.log(cursoDeNode);

// verifico el prototipo del objeto abstracto instanciado  
console.log(Object.getPrototypeOf(cursoDeNode));


