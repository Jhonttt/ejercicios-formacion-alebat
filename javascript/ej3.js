//? ¿Qué salida tendrán los siguientes console.log?

// Comparaciones con booleanos
console.log(false + false);
// Devuelve false | devolvió 0
console.log(false + true);
// Devuelve true | devolvió 1
console.log(true + true);
// Devuelve true | devolvió 2

// Comparaciones con arrays
console.log([] === []);
// Devuelve false | devolvió false
console.log([] + []);
// Devuelve false | devolvió ''
console.log([1, 2] + [3, 4]);
// Devuelve 1, 2, 3, 4 | devolvió 1,23,4
console.log([1] + 1);
// Devuelve 1, 1 | devolvió 11
console.log([1] - 1);
// Devuelve 1, -1 | devolvió 0

// Comparaciones con objetos
console.log({} + {});
// Devuelve true | devolvió [object Object][object Object]
console.log({} === {});
// Devuelve false | devolvió false
console.log([] === {});
// Devuelve false | devolvió false

// Comparaciones especiales
console.log(null + 1);
// Devuelve null | devolvió 1
console.log(undefined + 1);
// Devuelve undefined | devolvió NaN
console.log(null == 0);
// Devuelve false | devolvió false
console.log(null <= 0);
// Devuelve false | devolvió true
console.log(undefined == null);
// Devuelve false | devolvió true

// Operaciones con NaN
console.log(NaN + 1);
// Devuelve NaN | devolvió NaN
console.log(NaN == NaN);
// Devuelve false | devolvió false
console.log(NaN === NaN);
// Devuelve false | devolvió false