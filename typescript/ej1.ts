// Ejercicio 1, typescript: types e interfaces

// Crea un objeto bird que tenga los siguientes datos: name, canEat, canDrink, canSleep, canFly
// Crea un objeto dog que tenga los mismos datos que pájaro, pero que a demás tenga: race, age
// Crea los tipos/interfaces necesarios para poder trabajar con estos datos en TypeScript.

interface bird {
  name: string,
  canEat: boolean,
  canDrink: boolean,
  canSleep: boolean,
  canFly: boolean,
}

interface dog extends bird {
  race: string,
  age: number,
}

const bird1: bird = {
  name: 'Piolin',
  canEat: false,
  canDrink: true,
  canSleep: true,
  canFly: true
}

const dog1: dog = {
  name: 'Princesa',
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: 'bulldog',
  age: 1
}