console.log("Excercise 3.3");
function esperarISaludar(nom, callback) {
    setTimeout(() => {
        callback(nom);
    }, 2000);
}

function saludar(nom) {
    console.log(`Hola, ${nom}!`);
}

esperarISaludar("Anna", saludar);
