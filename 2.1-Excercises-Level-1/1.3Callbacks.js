// 1.3 CALLBACKS.
console.log("Excercise 3.1");

function process(numb10, callback) {
  callback(numb10);
}
function message(numb10) {
  console.log(`${numb10} processed`);
}
let numb10 = 55;
process(numb10, message);


console.log("Excercise 3.2");

function calculator (num1,num2,callback){
    callback(num1,num2);
}
function sum (num1,num2){
    console.log("La suma es: " + (num1+num2))
}
let num1 = 10
let num2 = 5
calculator (num1,num2,sum)

// Exercici 1
// Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. 
// La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.

// Exercici 2
// Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres:
//  dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres.
//  Després, crida calculadora amb una funció que faci la suma dels dos nombres.