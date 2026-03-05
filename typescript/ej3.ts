//? Ejercicio 3, Creando más tipos

// 1. Partiendo del ejercicio anterior, crea un nuevo objeto llamado `cat` que solamente tenga `name`, `color`, `canSleep`
// 2. Partiendo del ejercicio anterior, crea un nuevo objeto llamado `Snake` que solamente tenga `canEat`, `canDrink`, `canSleep`

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

type cat = Pick<bird, 'name' | 'canSleep'> & { color: string };
type Snake = Omit<bird, 'name' | 'canFly'>;

const bird3: bird = {
  name: 'Piolin',
  canEat: false,
  canDrink: true,
  canSleep: true,
  canFly: true
}

const dog3: dog = {
  name: 'Princesa',
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
  race: 'Chucho',
  age: 1
}

const cat1: cat = {
  name: 'Princesa',
  canSleep: true,
  color: 'blanco',
}

const snake1: Snake = {
  canEat: true,
  canDrink: false,
  canSleep: true,
}