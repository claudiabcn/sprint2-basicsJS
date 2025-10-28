console.log("Excercises 7.1:");

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, beautiful world");
    }, 2000);
});

console.log("Excercise 7.2:");
myPromise.then((result) => console.log(result));

console.log("Excercise 7.3:");

const myPromise2 = new Promise((resolve, reject) => {
    const input = "Helloooo";
    setTimeout(() => {
        if (input === "Helloooo") {
            resolve("Promise accepted");
        } else {
            reject("Promise rejected");
        }
    }, 1500);
});

myPromise2.then((result) => console.log(result))
    .catch((error) => console.log(error));

console.log("Excercise 7.4:");

const myFailablePromise = (shouldSucceed) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (shouldSucceed) {
            resolve("Success");
        } else {
            reject(new Error("Error"));
        }
    }, 2500);
});

const asyncFunctionSafe = async (shouldSucceed) => {
    try {
        const result = await myFailablePromise(shouldSucceed);
        console.log(`[Success Result]: ${result}`);
    } catch (error) {
        console.error(`[Error Result]: ${error.message}`);
    }
};

console.log("Testing success");
asyncFunctionSafe(true);
