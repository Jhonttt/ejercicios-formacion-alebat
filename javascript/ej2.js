//? Ejercicio 2, Hoisting
// Que devuelve por consola cada uno de los siguientes console.log

console.log(a);
var a = "hola";
//* Devuelve undefined

console.log(b);
let b = "hola";
//! Devuelve un error

console.log(c);
const c = "hola";
//! Devuelve el mismo error que con let

sayHi();
//* Devuelve 'Hola desde sayHi!'

function sayHi() {
  console.log("Hola desde sayHi!");
}
// No devuelve nada (pues estas declarando la función pero no llamándola)

function sayBye() {
  console.log("Adios desde sayBye!");
}
// No devuelve nada (pues estas declarando la función pero no llamándola)

sayBye();
//* Devuelve 'Adios desde sayBye!'