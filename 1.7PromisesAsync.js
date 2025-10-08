// 1.7 Promises Async/Await
console.log("Excercise 7.5");

function crearPromesa(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === 'Hola') {
                resolve('Promesa resuelta');
            } else {
                reject('Promesa rechazada');
            }
        }, 2000);
    });
}

const probarPromesa = async (texto) => {
    try {
        const resultado = await crearPromesa(texto);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

probarPromesa('Hola'); 
probarPromesa('Adios');  


// Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.
