console.log("Excercise 7.1");
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hola, món");
  }, 2000);
});

console.log("Excercise 7.2");
myPromise.then((result) => console.log(result));

console.log("Excercise 7.3");

const myPromise2 = new Promise((resolve, reject) => {
  const input = "Holaa";
  setTimeout(() => {
    if (input === "Hola") {
      resolve("Promesa resolta!");
    } else {
      reject("Promesa rebutjada!");
    }
  }, 2000);
});

myPromise2
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

console.log("Excercise 7.4");

const myPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hola, món");
  }, 2000);
});

const asyncFunction = async () => {
  const result = await myPromise3;
  console.log(result);
};

asyncFunction();
