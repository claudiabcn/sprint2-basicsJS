console.log(`Excercise 4.3`);

function copyObject(obj) {
  let objCopy = { ...obj };
  return objCopy;
}

let object1 = { a: 1, b: 2, c: 3 };
let object2 = copyObject(object1);
object2.b = 20;

console.log(`Object 1:`, object1);
console.log(`Object 2:`, object2);