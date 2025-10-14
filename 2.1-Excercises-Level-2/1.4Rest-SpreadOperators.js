// 1.4 Rest & Spread operators
console.log("Excercise 4.3");

function copiarObjecte(obj) {
    const objCopia = { ...obj };
    return objCopia;
}

const objecte1 = { a: 1, b: 2, c: 3 };
const objecte2 = copiarObjecte(objecte1);
objecte2.b = 20;

console.log("Objecte 1:", objecte1); 
console.log("Objecte 2:", objecte2); 


// Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.