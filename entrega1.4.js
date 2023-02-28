/** NIVEL 1 EJERCICIO 1 */
//copio funciones getEmployee y getSalary para reutilizarlas junto con objetos
let employees = [
  {
    id: 1,
    name: 'Linux Torvalds',
  },
  {
    id: 2,
    name: 'Bill Gates',
  },
  {
    id: 3,
    name: 'Jeff Bezos',
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

const getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = employees.find((emp) => emp.id === id);
    if (empleado) {
      resolve(`\n ** NIVEL 1 EJERCICIO 1 * \nEl nombre es: ${empleado.name}`);
    } else {
      reject(new Error(`No se ha encontrado el empleado con ID ${id}`));
    }
  });
};

const getSalary = (employee) => {
  return new Promise((resolve, reject) => {
    const salario = salaries.find((salario) => salario.id === employee.id);
    if (salario) {
      resolve(`El salario es: ${salario.salary}`);
    } else {
      reject(`No se encontró el salario para el empleado con id ${employee.id}`);
    }
  });
};

// funcion asincrona que reutiliza getEmployee y getSalary para retornar el nombre y salario.
async function nombreYSalario(id) {
  const nombre = await getEmployee(id)
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));
  const salario = await getSalary({ id })
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));
}
nombreYSalario(1);

/** NIVEL 1 EJERCICIO 2 */
//Funcion asincrona que recibe una funcion que retorna promesa
const funcionAsicrona = async () => {
  try {
    const resultado = await funcionQueRetornaPormesa();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
};
//Funcion que devuelve una promesa que efectua su resolve luego de 2 segundos
const funcionQueRetornaPormesa = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('\n ** NIVEL 1 EJERCICIO 2 * ');
      resolve('Gracias por la espera! \n');
    }, 2000);
  });
};
funcionAsicrona();

/** NIVEL 2 EJERCICIO 1 */
const multiplicaX2 = (num) => {
  //return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  //});
};

// const sumarDobles = (num1, num2, num3) => {
//   multiplicaX2(num1)
//     .then((resultado1) => {
//       const numero1 = resultado1;
//       multiplicaX2(num2).then((resultado2) => {
//         const numero2 = resultado2;
//         multiplicaX2(num3).then((resultado3) => {
//           const numero3 = resultado3;
//           console.log(resultado1 + resultado2 + resultado3);
//         });
//       });
//     })
//     .catch((error) => console.log(error));
// };

const sumassss = async (num1, num2, num3) => {
  const numu1 = await multiplicaX2(num1);
  const numu2 = await multiplicaX2(num2);
  const numu3 = await multiplicaX2(num3);
  console.log(numu1 + numu2 + numu3);
};
multiplicaX2(6)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));
sumarDobles(2, 2, 2);

sumassss(3, 3, 3);
