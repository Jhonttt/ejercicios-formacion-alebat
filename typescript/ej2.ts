//? Ejercicio 2

// Partiendo del `ejercicio 1`, haz que la raza (race), solo pueda ser `Husky`, `Labrador`, `Chucho`

interface bird {
  name: string,
  canEat: boolean,
  canDrink: boolean,
  canSleep: boolean,
  canFly: boolean,
}

interface dog extends bird {
  race: 'Husky' | 'Labrador' | 'Chucho',
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
  race: 'Chucho',
  age: 1
}