# Entrega 1.5

**Tabla de Contenido**

[TOCM]


## Prerrequisitos
Antes de ejecutar el código es necesario tener instalado Node.js en tu sistema operativo.

## Ejecución de las funciones
El código consta de tres niveles de ejercicios, cada uno con distintas funciones que se ejecutan de manera independiente. Debes ejecutar el archivo **entrega1.5.js** en la consola usando el siguiente comando:
`$ node entrega1.5.js` 

### Nivel 1
#### Ejercicio 1
```
fs.appendFile("pruebaEjercicio1.5.txt", `Hola`, (err) => {
  if (err) throw err;
});
```
Esta función escribe el texto 'Hola' en un archivo llamado **pruebaEjercicio1.5.txt**.

#### Ejercicio 2
```
fs.readFile("pruebaEjercicio1.5.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`${data}`);
  }
});
```
Esta función lee el contenido del archivo **pruebaEjercicio1.5.txt** y lo muestra por consola.

#### Ejercicio 3
```
const comprimirArchivo = (entrada, salida) => {
  const documetoEntrada = fs.createReadStream(entrada);
  const documentoSalida = fs.createWriteStream(salida);
  try {
    documetoEntrada.pipe(gzip).pipe(documentoSalida);
  } catch (error) {
    console.log(error);
  }
};
```
Esta función comprime el archivo **pruebaEjercicio1.5.txt** y lo guarda como **pruebaEjercicio1.5.txt.gz**.

### Nivel 2
#### Ejercicio 1
```
let contar = 0;
const funcionRecusiva = setInterval(() => {
  contar++;
  if (contar === 1) {
    clearInterval(funcionRecusiva);
  }
}, 1000);
 ```
Esta función imprime un mensaje de forma recursiva por consola cada segundo.

#### Ejercicio 2
```
const archivoUsuario = "dir C:\\Users";
  exec(archivoUsuario, (error, stdout, stderr) => {
    if (error) {
      console.log(`Hubo un error: ${error}`);
    }
    if (stderr) {
     console.log(stderr);
    }
  console.log(stdout);
});
```
Esta función lista el contenido del directorio de usuario en Windows y lo muestra por consola.

### Nivel 3
#### Ejercicio 1
```
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

  console.log(`Archivos creados: ${hexFile}, ${base64File}`);
}
```
Esta función codifica el archivo **pruebaEjercicio1.5.txt** en hexadecimal y en base64 y guarda los archivos codificados como **pruebaEjercicio1.5_hex.txt** y **pruebaEjercicio1.5_base64.txt**

#### Ejercicio 2
```
const clave = scryptSync("1234", "salt", 24);

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
  });
}
```
Esta función encripta el archivo **pruebaEjercicio1.5_hex.txt** y guarda el archivo encriptado como **pruebaEjercicio1.5.enc**, por ultimo elimina el archivo **pruebaEjercicio1.5_hex.txt**.

#### Ejercicio 3
```
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
  });
};

```
Esta función desencripta el archivo pruebaEjercicio1.5.enc y lo guarda como pruebaEjercicio1.5_hex.txt. 


**Tabla de Contenido**

[TOCM]



### FIN