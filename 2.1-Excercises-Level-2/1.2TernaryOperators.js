// 1.2 TERNARY OPERATOR.
console.log("Excercise 2.3");

const num1 =-7
num1 > 0 ? console.log(`${num1} és positiu`) : num1 < 0 ? console.log(`${num1} és negatiu`) : console.log(`${num1} és zero`);

function trobarMaxim(a, b, c) {
    return a>b ? (a>c ? a : c) : (b>c ? b : c); 

}

// Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.

// Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.