//? Ejercicio 5, maps
// Sigue los siguientes pasos:

// Crea un mapa llamado myMap
const myMap = new Map();
// Añade los siguientes key-valor al map
// Clave	Valor
// moroso	user (object)
myMap.set('moroso', user);
// agarrado	user (object)
myMap.set('agarrado', user);
// generoso	user2 (object)
myMap.set('generoso', user2);
// funcion	findAnimal (function)
myMap.set('funcion', findAnimal);
// color	color (string)
myMap.set('color', 'color');

// Muestra por consola todo el map
console.log(myMap);
// Muestra por consola el key moroso
console.log(myMap.get('moroso'));
// Comprueba si existe la key hola
console.log(myMap.has('hola'));
// Muestra por consola el tamaño total del map
console.log(myMap.size);
// Recorre el map con un forEach
myMap.forEach((v, k) => {
  console.log(k + ' - ' + v);
});
// Elimina el elemento agarrado del map
myMap.delete('agarrado');
// Limpia el mapa por completo
myMap.clear();




