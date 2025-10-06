// 1.1 ARROW FUNCTIONS.
console.log("The following excersises are about arrow functions:");

function add(a, b) {
  return a + b;
}
console.log("Normal add function: " + add(3, 3));

let addArrow = (a, b) => a + b;
console.log("Arrow add function: " + addArrow(10, 15));

function random() {
  return Math.floor(Math.random() * (100 - 0 + 1) + 0);
}
console.log("Normal random number function: " + random());

let randomArrow = () => Math.floor(Math.random() * (100 - 0 + 1) + 0);
console.log("Arrow random number function: " + randomArrow());

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    let arrowFunction = () =>
      console.log(`Greeting arrow function: Hola, ${this.name}`);
    return arrowFunction();
  }
}
let person1 = new Person("Claudia");
person1.greet();

// 1.2 TERNARY OPERATOR.
console.log("The following excersises are about ternary operators:");
let age = 24;
age >= 18 ? console.log("Pots conduir") : console.log("No pots conduir");

// Exercici 1
// Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.

// Exercici 2
// Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.

// 1.3 CALLBACKS.
console.log("The following excersises are about callbacks:");

// Exercici 1
// Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.

// Exercici 2
// Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.

// 1.4 Rest & Spread operators
console.log("The following excersises are about rest & spread operators:");

//Exercici 1
// Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.

// Exercici 2
// Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

// 1.5 Array transformations
console.log("The following excersises are about array transformations:");

// Exercici 1
// Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.

// Exercici 2
// Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.

// Exercici 3
// Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.

// Exercici 4
// Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.

// 1.6 Array loops

console.log("The following excersises are about array loops:");
// Exercici 1
// forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];

// Exercici 2
// for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];

// Exercici 3
// filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. let numeros = [1, 2, 3, 4, 5, 6];
