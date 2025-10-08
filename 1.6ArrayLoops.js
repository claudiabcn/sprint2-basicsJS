
// 1.6 Array loops

console.log("Excercise 6.1");
let names= ['Anna', 'Bernat', 'Clara'];
names.forEach(names=> console.log(names));


console.log("Excercise 6.2");
let names2= ['Anna', 'Bernat', 'Clara'];
for (let name of names2){
    console.log(name);
}

console.log("Excercise 6.3");
let numbers= [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);   

// Exercici 1
// forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];
// Exercici 2
// for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];
// Exercici 3
// filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. let numeros = [1, 2, 3, 4, 5, 6];

