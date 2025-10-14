// 1.5 Array transformations
console.log("Excercise 5.5");

const numbers = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const result = numbers
    .filter(num => num >= 10)
    .map(num => num * 2)
    .reduce((acc, num) => acc + num, 0);

console.log(result);    


// Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:

// - Filtra els nombres majors o iguals a 10.

// - Multiplica cada nombre filtrat per 2.

// - Calcula la suma dels nombres filtrats i multiplicats per 2.

// - La funció ha de retornar el resultat de la suma.
