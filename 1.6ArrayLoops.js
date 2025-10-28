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
