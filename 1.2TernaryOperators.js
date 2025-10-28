
console.log("Excercise 2.3");

const num1 =-7
num1 > 0 ? console.log(`${num1} és positiu`) : num1 < 0 ? console.log(`${num1} és negatiu`) : console.log(`${num1} és zero`);

function trobarMaxim(a, b, c) {
    return a>b ? (a>c ? a : c) : (b>c ? b : c); 

}

