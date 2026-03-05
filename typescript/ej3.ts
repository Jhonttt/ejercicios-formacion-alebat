//? Ejercicio 3, Creando más tipos

//* 1. Partiendo del ejercicio anterior, crea un nuevo objeto llamado `cat` que solamente tenga `name`, `color`, `canSleep`
//* 2. Partiendo del ejercicio anterior, crea un nuevo objeto llamado `Snake` que solamente tenga `canEat`, `canDrink`, `canSleep`

import { Animal } from "./ej1";
import { PerroV2 } from "./ej2";

type Gato = Pick<Animal, "name" | "canSleep"> & { color: string };
type Serpiente = Omit<Animal, "name" | "canFly">;

const bird: Animal = {
  name: "Piolin",
  canEat: false,
  canDrink: true,
  canSleep: true,
  canFly: true,
};

const dog: PerroV2 = {
  name: "Princesa",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: "Chucho",
  age: 1,
};

const cat: Gato = {
  name: "Princesa",
  canSleep: true,
  color: "blanco",
};

const snake1: Serpiente = {
  canEat: true,
  canDrink: false,
  canSleep: true,
};
