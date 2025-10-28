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
