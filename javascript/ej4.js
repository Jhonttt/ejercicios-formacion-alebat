//? Ejercicio 4, refactoriza el código
// Dado los siguientes códigos, refactorízalos como consideres, si consideras que está bien, explica el motivo.

// Primer código
//* Tenemos una función que saca el nombre completo del usuario con el nombre y apellido

const usuario = {
  nombre: "Pedro",
  apellido: "Sánchez",
  edad: 45,
  profesion: "Barro man",
};

console.log(nombreUsuario(usuario));

function nombreUsuario({ nombre, apellido }) {
  return "Me llamo " + nombre + " " + apellido;
}

// Lo primero sería cambiar el nombre de la constante a nombreCompleto
// Y a ser posible trabajar con variable let o const en este caso const
// Y por ultimo desestructurar los argumentos a recibir

// Segundo código
//* Tenemos una función que calcula el salario anual y el nombre del usuario
const user = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

function calculateAnnualSalary({ salary }) {
  return salary * 12;
}

function userData({ salary, name, last }) {
  const annualSalary = calculateAnnualSalary({ salary });
  const fullName = nombreUsuario({ nombre: name, apellido: last });

  return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
}

console.log(userData(user));

// Lo primero seria desestructurar los argumentos de nuevo, para solo recibir los datos necesarios
// Y además reutilizar la función previamente creada dándole un alias que cuadre con el nombre en la función

// Tercer código
//* Si el usuario tiene 30 años y no es español, recibirá una ayuda del gobierno de 2000€
const newUser = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

function esExtranjero({ nationality, age }) {
  if (nationality !== "España" || age !== 30) return "No es apto para la ayuda del gobierno";
  return "Apto para la ayuda del gobierno";
}

console.log(esExtranjero(newUser));

// Lo primero sería cambiar el nombre de la constante a esExtranjero
// Volvemos a desestructurar los datos
// Cambiar la lógica, a lo que tiene que pasar para que no sea apto, para si es el caso sacarle de la función, y en caso contrario ser apto
