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
  try {
  const nombre = await getEmployee(id)
  const salario = await getSalary({ id })
  console.log(`${nombre}\n${salario}`);
  } catch (error) {
    console.log(error);
  }
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
//Funcion que retorna el doble del numero que se le pasa como parametro despues de dos segundos
const multiplicaX2 = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  });
};

//Funcion que recibe 3 numeros y calcula la suma de sus dobles utilizando la funcion anterio multiplicaX2()
const sumarDobles = async (num1, num2, num3) => {
  try {
    const numu1 = await multiplicaX2(num1);
    const numu2 = await multiplicaX2(num2);
    const numu3 = await multiplicaX2(num3);
    console.log(numu1 + numu2 + numu3);
  } catch (error) {
    console.log(error);
  }
};

//Probando funcione que multiplica
multiplicaX2(6)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));
//Prueba de funcion que suma los tres numeros dobles
sumarDobles(2, 2, 2);

/* 
//Esta es otra forma de hacer lo mismo que hace la funcion sumarDobles()
const sumarDobles = (num1, num2, num3) => {
  multiplicaX2(num1)
    .then((resultado1) => {
      const numero1 = resultado1;
      multiplicaX2(num2).then((resultado2) => {
        const numero2 = resultado2;
        multiplicaX2(num3).then((resultado3) => {
          const numero3 = resultado3;
          console.log(resultado1 + resultado2 + resultado3);
        });
      });
    })
    .catch((error) => console.log(error));
}; */