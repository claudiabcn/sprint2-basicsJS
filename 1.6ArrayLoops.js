
// 1.6 Array loops

console.log("Excercise 6.4");

let obj = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' }
for (let clau in obj) {
    console.log(`${clau}: ${obj[clau]}`);
}

let numeros = [1, 2, 3, 4, 5, 6];
for (let num of numeros) {
    if (num === 5) {
        break;
    }
    console.log(num);
}

// Exercici 4
// for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.

// Exercici 5
// for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];