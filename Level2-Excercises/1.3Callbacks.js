console.log(`Excercise 3.3`);

function waitAndGreet(name, callback) {
  setTimeout(() => {
    callback(name);
  }, 2000);
}

function greet(name) {
  console.log(`Hello, ${name}!`);
}

waitAndGreet("Anna", greet);