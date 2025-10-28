console.log("Excercise 6.6");

function wait(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Promise complete after ${seconds} seconds`);
        }, seconds * 1000);
    });
}
const promise1 = wait(2);
const promise2 = wait(3);

Promise.all([promise1, promise2])
    .then((results) => {
        console.log("All promises are completed");
        console.log("Result 1:", results[0]);
        console.log("Result 2:", results[1]);
    })
    .catch((error) => {
        console.error("There is an error:", error);
    });