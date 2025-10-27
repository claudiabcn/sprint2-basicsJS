// 1.1 ARROW FUNCTIONS.
console.log("Excercise 1.4");

function printNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const print = (num) => console.log(num);
        print(numbers[i]);
    }
}

const nums = [1, 2, 3, 4, 5];
printNumbers(nums);


// Exercici 4
// Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.
