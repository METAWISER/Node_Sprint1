/** NIVEL 1 EJERCICIO 1 */
// Arrow Function autoinvocable que muestra la suma de dos numeros
console.log(((a, b) => a + b)(17,6));

/** ********************************************************************** */
/** NIVEL 2 EJERCICIO 1 */
// Arrow Function que retorna un Objeto con un Atributo que tiene un valor al Parametro recibido
const anadirParametroAlObjeto = valor => ( {curso : valor} );
console.log(anadirParametroAlObjeto('Node.js'));

/** ********************************************************************** */
/** NIVEL 2 EJERCICIO 2 */
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

console.log(Persona.prototype.dirNom);

/** ************************************************************************ */
/** NIVEL 3 EJERCICIO 1 */

class Curso {
    contenido(){throw new error('no se puede invocar metodos abstractos');}
}
class NodeJs extends Curso {
    verContenido(){ return 'contenido de Node.js disponile';}
}
class Javascript extends Curso {
    verContenido(){ return 'contenido de Javascript disponible';}
}
const crearCurso = (curso) => {
    if(curso === 'NodeJs') {
        return new NodeJs()
    } else if(curso === 'Javascript'){
        return new Javascript()
    } else {
        throw new error('Ese curso no existe')
    }
}

const nuevoCursoDeNodejs = crearCurso('NodeJs')
console.log(nuevoCursoDeNodejs);

