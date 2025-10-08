// 1.7 Promises & Async/Await

console.log("Excercise 7.1");
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, món');
    }, 2000);   
});

console.log("Excercise 7.2");
myPromise.then(result => console.log(result));  

console.log("Excercise 7.3");

const myPromise2 = new Promise((resolve, reject) => {
    const input = 'Holaa'; 
    setTimeout(() => {
        if (input === 'Hola') { resolve('Promesa resolta!'); }
        else { reject('Promesa rebutjada!'); }
    }, 2000);
});

myPromise2
    .then(result => console.log(result))
    .catch(error => console.log(error));

console.log("Excercise 7.4");

const myPromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, món');
    }, 2000);   
});

const asyncFunction = async () => {
    const result = await myPromise3;
    console.log(result);
}

asyncFunction()

// Exercici 1
// Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.

// Exercici 2
// Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.

// Exercici 3
// Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.

// Exercici 4
// Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.