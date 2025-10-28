console.log("Excercise 1.1");
function add(a, b) {
    return a + b;
}
console.log("Normal add function: " + add(3, 3));
let addArrow = (a, b) => a + b;
console.log("Arrow add function: " + addArrow(10, 15));

console.log("Excercise 1.2");
function random() {
    return Math.floor(Math.random() * 101);
}
console.log("Normal random number function: " + random());
let randomArrow = () => Math.floor(Math.random() * 101);
console.log("Arrow random number function: " + randomArrow());

console.log("Excercise 1.3");
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