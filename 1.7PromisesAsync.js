console.log("Excercise 7.5");
function createPromise(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === 'Hello') {
                resolve('Promise resolved');
            } else {
                reject('Promise rejected');
            }
        }, 2000);
    });
}

const testPromise = async (text) => {
    try {
        const result = await createPromise(text);

        console.log(result); 
    } catch (error) {

        console.error(error); 
    }
};

console.log('Testing "Hello" (Success):');
testPromise('Hello'); 

console.log('Testing "Goodbye" (Failure):');
testPromise('Goodbye');