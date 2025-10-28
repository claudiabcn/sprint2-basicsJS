console.log("Excercise 4.5");
function myFunction(a, b, c) {
console.log(a,b,c)
}
const values = [1, 2, 3];
myFunction(...values);

console.log("Excercise 4.6");
const person = { name: "Claudia", age: 31 }
const job = { role: "Developer", company: "Amazon" }
const merged = { ...person, ...job }
console.log(merged);
