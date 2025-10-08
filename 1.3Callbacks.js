// 1.3 CALLBACKS.
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


// Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.