/** NIVEL 1 EJERCICIO 1 */
// Arrow Function autoinvocable que muestra la suma de dos numeros
const devolverObjeto = ((a, b) => {
    console.log(a + b); 
})(17,6);

/** ********************************************************************** */
/** NIVEL 2 EJERCICIO 1 */
// Arrow Function que retorna un Objeto con un Atributo que se ha pasado como Parametro
const anadirParametroAlObjeto = (atributo) => {
        return {parametro : atributo}
};

console.log(anadirParametroAlObjeto('Node.js'));

/** ********************************************************************** */
/** NIVEL 2 EJERCICIO 2 */
//Creo la Clase PERSONA
class PERSONA {
    constructor (nom) {
        this.nom = nom
    }
    //Metodo que muestra el nom 
    dirNom = () => console.log(this.nom);
}
// Creo instancia de PERSONA
const persona = new PERSONA('Carlos Z.');
// Invoco el Metodo para mostrar el nombre por la consola 
persona.dirNom();
/** ************************************************************************ */
/** NIVEL 3 EJERCICIO 1 */
const creadorDeObjetos = () => {
    
}