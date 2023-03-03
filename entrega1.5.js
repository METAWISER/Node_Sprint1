const fs = require("fs");
const zlib = require("zlib");
const { exec } = require("child_process");
const { stdout, stderr } = require("process");
const {
  scryptSync,
  createCipheriv,
  createDecipheriv,
  randomBytes,
} = require("crypto");
const { path } = require("path");
const gzip = zlib.createGzip();

/**NIVEL 1 */
//Funcion que escribe un mensaje en un archivo
fs.appendFile("pruebaEjercicio1.5.txt", `Hola`, (err) => {
  if (err) throw err;
  console.log(
    "\n NIVEL 1 EJERCICIO 1 \n *****Mensaje añadido correctamente***** \n"
  );
});
// Funcion que muestra por la consola el contenido añadido en la funcion anterior
fs.readFile("pruebaEjercicio1.5.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`NIVEL 1 EJERCICIO 2 \n ${data}`);
  }
});

// Funcion que comprima el archivo que estamos usando para el ejercicio
const comprimirArchivo = (entrada, salida) => {
  const documetoEntrada = fs.createReadStream(entrada);
  const documentoSalida = fs.createWriteStream(salida);
  try {
    console.log(
      `\n NIVEL 1 EJERCICIO 3 \n El archivo ${entrada} se ha compirmido correctamente`
    );
    documetoEntrada.pipe(gzip).pipe(documentoSalida);
  } catch (error) {
    console.log(error);
  }
};
comprimirArchivo("pruebaEjercicio1.5.txt", "pruebaEjercicio1.5.txt.gz");

/** ****************************************************************************************** */
/** NIVEL 2 */
//Funcion recursiva que imprime un mensaje por la consola cada segundo
let contar = 0;
const funcionRecusiva = setInterval(() => {
  console.log(`NIVEL 2 EJERCICIO 1 \n`);
  // le he puesto el contador en 1 para detener el bucle y ver solo un console.log()
  contar++;
  if (contar === 1) {
    clearInterval(funcionRecusiva);
  }
}, 1000);

//Funcion que lista por la consola el contenido del directorio de usuario
const archivoUsuario = "dir C:\\Users";

exec(archivoUsuario, (error, stdout, stderr) => {
  if (error) {
    console.log(`Hubo un error: ${error}`);
  }
  if (stderr) {
    console.log(stderr);
  }
  console.log(`\n NIVEL 2 EJERCICIO 2 \n ${stdout}`);
});

/** ********************************************************************************************* */
/** NIVEL 3 */
// Funcion que codifica dos archivos, uno en hexadecimal y otro en base64
function crearArchivoCodificado() {
  // leer el archivo
  const data = fs.readFileSync("pruebaEjercicio1.5.txt", "utf-8");
  // codificar en hexadecimal
  const hexData = data.toString("hex");
  const hexFile = "pruebaEjercicio1.5_hex.txt";
  fs.writeFileSync(hexFile, hexData);

  // codificar en base64
  const base64Data = Buffer.from(data).toString("base64");
  const base64File = "pruebaEjercicio1.5_base64.txt";
  fs.writeFileSync(base64File, base64Data);

  console.log(`\n NIVEL 3 EJERCICIO 1 \n Archivos creados: ${hexFile}, ${base64File}`);
}
crearArchivoCodificado();

const clave = scryptSync("1234", "salt", 24);
//Funcion que encrypta un archivo
function cifrarArchivo(ruta_archivo, ruta_archivo_salida, clave) {
  // Leo el archivo de entrada y creo el de salida
  const entrada = fs.createReadStream(ruta_archivo);
  const salida = fs.createWriteStream(ruta_archivo_salida);
  // Emcripto los datos
  const iv = randomBytes(16);
  const cipher = createCipheriv("aes-192-cbc", clave, iv);
  let archivoEncriptado;
  entrada.on("data", (data) => {
    archivoEncriptado = cipher.update(data);
    //Guardo los datos encriptados en el nuevo archivo
    salida.write(archivoEncriptado);
  });
  entrada.on("end", () => {
    salida.end();
    //Borro el archivo ruta_archivo
    fs.unlinkSync(ruta_archivo);
    console.log(`\n NIVEL 3 EJERCICIO 2 \n El archivo ${ruta_archivo} ha sido cifrado y eliminado.`);
  });
}

cifrarArchivo("./pruebaEjercicio1.5_hex.txt", "pruebaEjercicio1.5.enc", clave);


const descifrarArchivos = (ruta_archivo, ruta_archivo_salida, clave) => {
  // Leo el archivo de entrada y creo el de salida
  const entrada = fs.createReadStream(ruta_archivo);
  const salida = fs.createWriteStream(ruta_archivo_salida);
  //Encrypto los datos
  const iv = randomBytes(16);
  const decipher = createDecipheriv("aes-192-cbc", clave, iv);
  let descifrado;
  entrada.on("data", (data) => {
    descifrado = decipher.update(data);
    salida.write(descifrado);
  });
  entrada.on("end", () => {
    salida.end();
    console.log(`\n NIVEL 3 EJERCICIO 3 \n El Archivo ${ruta_archivo} ha sido descifrado`);
  });
};

// Invoco la funcion con un setTimeout para esperar que el archivo encriptado './pruebaEjercicio1.5.enc' se cree y asi utilizarlo en la funcion y que no genere un error por que no se encuentre el archivo.
  setTimeout(() => {
    descifrarArchivos(
        "./pruebaEjercicio1.5.enc",
        "pruebaEjercicio1.5._hex.txt",
        clave
      )
  }, 2000);