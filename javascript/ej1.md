# Ejercicio 1, Nomenclatura y tipo de variables
## Escribe una variable llamada user name utilizando las siguientes nomenclaturas:
```js
Camel case: let userName;
Pascal case: let UserName;
Snake case: let user_name;
Kebab case: let user-name;
```
## Define los siguientes tipos de variables, di cuál utilizarías y por qué.
- Var: Var usa un ámbito de función por tanto no es recomendable usarlo nunca, y de hecho yo no lo usaría en ningún caso excepto que haya un caso muy concreto.
- Let: En cuanto let, usa un ámbito de bloque, y lo usaría en los casos en los que tengas que declarar una variable la cual su contenido vaya a cambiar.
- Const: Por último const se usaría para los casos en los que tienes que declarar una variable que no va a cambiar, también tiene un ámbito de bloque y junto a let son las que se suelen usar pues.