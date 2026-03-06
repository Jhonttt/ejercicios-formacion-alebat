//? Ejercicio 2

//* Partiendo del `ejercicio 1`, haz que la raza (race), solo pueda ser `Husky`, `Labrador`, `Chucho`

import { Animal, Perro } from './ej1'

export type PerroV2 = Perro & {
  race: 'Husky' | 'Labrador' | 'Chucho',
}

const bird: Animal = {
  name: 'Piolin',
  canEat: false,
  canDrink: true,
  canSleep: true,
  canFly: true 
}

const dog: PerroV2 = {
  name: 'Princesa',
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: 'Chucho',
  age: 1
}