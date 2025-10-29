console.log("Excercise 4.5");
function myFunction(a, b, c) {
console.log(a,b,c)
}
let values = [1, 2, 3];
myFunction(...values);

console.log("Excercise 4.6");
let person = { name: "Claudia", age: 31 }
let job = { role: "Developer", company: "Amazon" }
let merged = { ...person, ...job }
console.log(merged);
