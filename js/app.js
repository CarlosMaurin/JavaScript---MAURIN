// algoritmo que suma los numeros positivos hasta que se ingresa uno negativo//
//al final la salida muestra la suma de todos los numeros ingresados positivos//
let suma=0;

let numero = parseInt(prompt("ingrese un numero positivo"));
while (numero >= 0){
    suma += numero;
    numero = parseInt(prompt("ingrese otro numero"));
    
}
console.log("la suma de todos los numeros ingresados es igual a " + suma);




//Algoritmo que pide se ingrese una palabra. Mientras la palabra sea distinta de "piedra",//
//el ciclo sigui pidiendo palabras. Cuando es la indicada, el ciclo se cierra y pierde el juego//

let palabra = prompt("ingrese una palabra");

while (palabra != "piedra"){
    document.write("estas a salvo <br>");
    palabra = prompt("ingrese otra palabra");
}document.write("perdiste!")


