//para saltar lineas, usar document.write(+"<br>"+)//
//para poder usar ${} tengo q colocar `

alert("Bienvenido al BREW-LAB. A continuacion crearemos tu receta");

let densidadInicial;
let litros;
let galones;


let eficiencia = parseFloat(prompt("Ingrese el nivel de eficiencia de su equipo. Se recomienda entre 0.75 y 0.80"));
while((eficiencia < 0) || (eficiencia > 1) || (isNaN(eficiencia))){
    eficiencia = parseFloat(prompt("Por favor ingrese un número entre 0 y 1"));
}

document.write(`La eficiencia seleccionada es igual a ${eficiencia} <br>`);

do{
    litros = parseInt(prompt("Ingrese la cantidad de litros de cerveza a producir"));
}while(isNaN(litros));

galones = litros * 0.264172;



document.write(`Usted tiene pensado producir ${litros} de cerveza <br>`);



alert("Ahora seleccionaremos las maltas a utilizar");


function Fermentable (nombre, extracto, color, utiliza, kilos, libras, densidad){
    this.nombre = nombre;
    this.extracto = extracto;
    this.color = color;
    this.utiliza = utiliza;
    this.kilos = kilos;
    this.libras = libras;
    this.densidad = densidad;
    this.calculoDensidad = function (){
        if(this.utiliza == "SI"){
            this.densidad = this.libras * this.extracto * eficiencia;
        }
    }
}

let pilsen = new Fermentable ("pilsen", 37, 2, true, 0, 0, 0);
let cara30 = new Fermentable ("cara30", 35, 30, true, 0, 0, 0);
let cara60 = new Fermentable ("cara60", 34, 60, true, 0, 0, 0);
let cara120 = new Fermentable ("cara120", 33, 120, true, 0, 0, 0);
let chocolate = new Fermentable ("chocolate", 29, 400, true, 0, 0, 0);


pilsen.utiliza = prompt("te gustaría usar malta Pilsen? Ingrese SI en caso afirmativo. Ingrese NO en caso negativo").toUpperCase();
cara30.utiliza = prompt("te gustaría usar malta Cara30? Ingrese SI en caso afirmativo. Ingrese NO en caso negativo").toUpperCase();
cara60.utiliza = prompt("te gustaría usar malta Cara60? Ingrese SI en caso afirmativo. Ingrese NO en caso negativo").toUpperCase();
cara120.utiliza = prompt("te gustaría usar malta Cara120? Ingrese SI en caso afirmativo. Ingrese NO en caso negativo").toUpperCase();
chocolate.utiliza = prompt("te gustaría usar malta Chocolate? Ingrese SI en caso afirmativo. Ingrese NO en caso negativo").toUpperCase();


if(pilsen.utiliza == "SI"){
    pilsen.kilos = parseInt(prompt("Cuantos kilos de malta pilsen deseas usar?"));
    pilsen.libras = pilsen.kilos / 0.453592;
}
if(cara30.utiliza == "SI"){
    cara30.kilos = parseInt(prompt("Cuantos kilos de malta cara30 deseas usar?"));
    cara30.libras = cara30.kilos / 0.453592;
}
if(cara60.utiliza == "SI"){
    cara60.kilos = parseInt(prompt("Cuantos kilos de malta cara60 deseas usar?"));
    cara60.libras = cara60.kilos / 0.453592;
}
if(cara120.utiliza == "SI"){
    cara120.kilos = parseInt(prompt("Cuantos kilos de malta cara120 deseas usar?"));
    cara120.libras = cara120.kilos / 0.453592;
}
if(chocolate.utiliza == "SI"){
    chocolate.kilos = parseInt(prompt("Cuantos kilos de malta chocolate deseas usar?"));
    chocolate.libras = chocolate.kilos / 0.453592;
}

document.write(`Ud utilizará en su receta la siguiente lista de maltas`);
document.write("<br> <br>");
if(pilsen.kilos > 0 ){
    document.write(`${pilsen.kilos} kilos de malta ${pilsen.nombre} <br>`);
}
if(cara30.kilos > 0 ){
    document.write(`${cara30.kilos} kilos de malta ${cara30.nombre} <br>`);
}
if(cara60.kilos > 0 ){
    document.write(`${cara60.kilos} kilos de malta ${cara60.nombre} <br>`);
}
if(cara120.kilos > 0 ){
    document.write(`${cara120.kilos} kilos de malta ${cara120.nombre} <br>`);
}
if(chocolate.kilos > 0 ){
    document.write(`${chocolate.kilos} kilos de malta ${chocolate.nombre} <br>`);
}


pilsen.calculoDensidad();
cara30.calculoDensidad();
cara60.calculoDensidad();
cara120.calculoDensidad();
chocolate.calculoDensidad();


function calculoDensidadInicial (){
    densidadInicial = (pilsen.densidad + cara30.densidad + cara60.densidad + cara120.densidad + chocolate.densidad) / galones + 1000;
    return densidadInicial;
}

alert(`La densidad inicial de tu cerveza es igual a ${Math.round(calculoDensidadInicial())}`);
document.write("<br>");
document.write(`La densidad inicial de tu cerveza es igual a ${Math.round(calculoDensidadInicial())}`);
document.write("<hr>");



// let repetir;
// do{
//     calculoMaltas();
//     repetir = prompt("Para continuar, ingrese SI. Para repetir el proceso, ingrese NO");
// }while(repetir == "NO");


//---------------------CALCULOS DE LUPULO---------------------------////

alert("A continuación calcularemos los IBUs de nuestra receta");

let factorCorreccion = 7.489;
let ibuTotal;
let correccionDensidad;

if(densidadInicial <= 1050){
    correccionDensidad = 1;
}else{
    correccionDensidad = 1 + (((densidadInicial - 1050) / 1000) / 0.2);
}



function Lupulo(nombre, AA, gramos, onzas, tiempo, ibu, utiliza){
    this.nombre = nombre;
    this.AA = AA;
    this.gramos = gramos;
    this.onzas = onzas;
    this.tiempo = tiempo;
    this.ibu = ibu;
    this.utiliza = utiliza;
    this.calculoIbu = function(){
        this.ibu = ((this.onzas * this.tiempo * this.AA * factorCorreccion) / (galones*correccionDensidad))*1000;
    }
}

const cascade = new Lupulo("cascade", 0.08, 0, 0, 0, 0, true);
const kentGoldings = new Lupulo("Kent goldings", 0.05, 0, 0, 0, 0, true);
const bravo = new Lupulo("Bravo", 0.12, 0, 0, 0, 0, true);
const ekuanot = new Lupulo("Ekuanot", 0.11, 0, 0, 0, 0, true);
const simcoe = new Lupulo("Simcoe", 0.11, 0, 0, 0, 0, true);

cascade.utiliza = prompt("desea utilizar lúpulo Cascade en su receta? Ingrese SI en caso afirmativo. Ingrese NO en caso negativo").toUpperCase();
kentGoldings.utiliza = prompt("desea utilizar lúpulo Kent Goldings en su receta? Ingrese SI en caso afirmativo. Ingrese NO en caso negativo").toUpperCase();
bravo.utiliza = prompt("desea utilizar lúpulo Bravo en su receta? Ingrese SI en caso afirmativo. Ingrese NO en caso negativo").toUpperCase();
ekuanot.utiliza = prompt("desea utilizar lúpulo Ekuanot en su receta? Ingrese SI en caso afirmativo. Ingrese NO en caso negativo").toUpperCase();
simcoe.utiliza = prompt("desea utilizar lúpulo Simcoe en su receta? Ingrese SI en caso afirmativo. Ingrese NO en caso negativo").toUpperCase();


if(cascade.utiliza == "SI"){
    cascade.gramos = parseInt(prompt("cuántos gramos de CASCADE desea utilizar?:"));
    cascade.onzas = cascade.gramos * 0.035274;
    cascade.tiempo = parseInt(prompt("Durante cuántos minutos de hervor?"));
}

if((cascade.tiempo >= 0) && (cascade.tiempo <= 9)){
    cascade.tiempo = 0.06; 
}else if ((cascade.tiempo >= 10) && (cascade.tiempo <= 19)){
    cascade.tiempo = 0.15;
}else if ((cascade.tiempo >= 20) && (cascade.tiempo <= 29)){
    cascade.tiempo = 0.19;
}else if ((cascade.tiempo >= 30) && (cascade.tiempo <= 44)){
    cascade.tiempo = 0.24;
}else if ((cascade.tiempo >= 45) && (cascade.tiempo <= 59)){
    cascade.tiempo = 0.27;
}else if ((cascade.tiempo >= 60) && (cascade.tiempo <= 74)){
    cascade.tiempo = 0.30;
}else if (cascade.tiempo >= 75){
    cascade.tiempo = 0.34;
}

if(kentGoldings.utiliza == "SI"){
    kentGoldings.gramos = parseInt(prompt("cuántos gramos de KENT GOLDINGS desea utilizar?:"));
    kentGoldings.onzas = kentGoldings.gramos * 0.035274;
    kentGoldings.tiempo = parseInt(prompt("Durante cuántos minutos de hervor?"));
}
    

if((kentGoldings.tiempo >= 0) && (kentGoldings.tiempo <= 9)){
    kentGoldings.tiempo = 0.06; 
}else if ((kentGoldings.tiempo >= 10) && (kentGoldings.tiempo <= 19)){
    kentGoldings.tiempo = 0.15;
}else if ((kentGoldings.tiempo >= 20) && (kentGoldings.tiempo <= 29)){
    kentGoldings.tiempo = 0.19;
}else if ((kentGoldings.tiempo >= 30) && (kentGoldings.tiempo <= 44)){
    kentGoldings.tiempo = 0.24;
}else if ((kentGoldings.tiempo >= 45) && (kentGoldings.tiempo <= 59)){
    kentGoldings.tiempo = 0.27;
}else if ((kentGoldings.tiempo >= 60) && (kentGoldings.tiempo <= 74)){
    kentGoldings.tiempo = 0.30;
}else if (kentGoldings.tiempo >= 75){
    kentGoldings.tiempo = 0.34;
}

if(bravo.utiliza == "SI"){
    bravo.gramos = parseInt(prompt("cuántos gramos de BRAVO desea utilizar?:"));
    bravo.onzas = bravo.gramos * 0.035274;
    bravo.tiempo = parseInt(prompt("Durante cuántos minutos de hervor?"));
}

if((bravo.tiempo >= 0) && (bravo.tiempo <= 9)){
    bravo.tiempo = 0.06; 
}else if ((bravo.tiempo >= 10) && (bravo.tiempo <= 19)){
    bravo.tiempo = 0.15;
}else if ((bravo.tiempo >= 20) && (bravo.tiempo <= 29)){
    bravo.tiempo = 0.19;
}else if ((bravo.tiempo >= 30) && (bravo.tiempo <= 44)){
    bravo.tiempo = 0.24;
}else if ((bravo.tiempo >= 45) && (bravo.tiempo <= 59)){
    bravo.tiempo = 0.27;
}else if ((bravo.tiempo >= 60) && (bravo.tiempo <= 74)){
    bravo.tiempo = 0.30;
}else if (bravo.tiempo >= 75){
    bravo.tiempo = 0.34;
}

if(ekuanot.utiliza == "SI"){
    ekuanot.gramos = parseInt(prompt("cuántos gramos de EKUANOT desea utilizar?:"));
    ekuanot.onzas = ekuanot.gramos * 0.035274;
    ekuanot.tiempo = parseInt(prompt("Durante cuántos minutos de hervor?"));

}

if((ekuanot.tiempo >= 0) && (cascade.tiempo <= 9)){
    ekuanot.tiempo = 0.06; 
}else if ((ekuanot.tiempo >= 10) && (ekuanot.tiempo <= 19)){
    ekuanot.tiempo = 0.15;
}else if ((ekuanot.tiempo >= 20) && (ekuanot.tiempo <= 29)){
    ekuanot.tiempo = 0.19;
}else if ((ekuanot.tiempo >= 30) && (ekuanot.tiempo <= 44)){
    ekuanot.tiempo = 0.24;
}else if ((ekuanot.tiempo >= 45) && (ekuanot.tiempo <= 59)){
    ekuanot.tiempo = 0.27;
}else if ((ekuanot.tiempo >= 60) && (ekuanot.tiempo <= 74)){
    ekuanot.tiempo = 0.30;
}else if (ekuanot.tiempo >= 75){
    ekuanot.tiempo = 0.34;
}

if(simcoe.utiliza == "SI"){
    simcoe.gramos = parseInt(prompt("cuántos gramos de SIMCOE desea utilizar?:"));
    simcoe.onzas = simcoe.gramos * 0.035274;
    simcoe.tiempo = parseInt(prompt("Durante cuántos minutos de hervor?"));
}
    

if((simcoe.tiempo >= 0) && (simcoe.tiempo <= 9)){
    simcoe.tiempo = 0.06; 
}else if ((simcoe.tiempo >= 10) && (simcoe.tiempo <= 19)){
    simcoe.tiempo = 0.15;
}else if ((simcoe.tiempo >= 20) && (simcoe.tiempo <= 29)){
    simcoe.tiempo = 0.19;
}else if ((simcoe.tiempo >= 30) && (simcoe.tiempo <= 44)){
    simcoe.tiempo = 0.24;
}else if ((simcoe.tiempo >= 45) && (simcoe.tiempo <= 59)){
    simcoe.tiempo = 0.27;
}else if ((simcoe.tiempo >= 60) && (simcoe.tiempo <= 74)){
    simcoe.tiempo = 0.30;
}else if (simcoe.tiempo >= 75){
    simcoe.tiempo = 0.34;
}

document.write(`Ud utilizará en su receta la siguiente lista de Lúpulos:`);
document.write("<br> <br>");
if(cascade.gramos > 0 ){
    document.write(`${cascade.gramos} gramos de lúpulo ${cascade.nombre} <br>`);
}
if(kentGoldings.gramos > 0 ){
    document.write(`${kentGoldings.gramos} gramos de lúpulo ${kentGoldings.nombre} <br>`);
}
if(bravo.gramos > 0 ){
    document.write(`${bravo.gramos} gramos de lúpulo ${bravo.nombre} <br>`);
}
if(ekuanot.gramos > 0 ){
    document.write(`${ekuanot.gramos} gramos de lúpulo ${ekuanot.nombre} <br>`);
}
if(simcoe.gramos > 0 ){
    document.write(`${simcoe.gramos} gramos de lúpulo ${simcoe.nombre} <br>`);
}


cascade.calculoIbu();
kentGoldings.calculoIbu();
bravo.calculoIbu();
ekuanot.calculoIbu();
simcoe.calculoIbu();

console.log(cascade);
console.log(kentGoldings);
console.log(bravo);
console.log(ekuanot);
console.log(simcoe);


function calculoIbuTotal(){
    ibuTotal = cascade.ibu + kentGoldings.ibu + bravo.ibu + ekuanot.ibu + simcoe.ibu;
    return ibuTotal;
}

alert(`Los IBUs de tu cerveza son iguales a ${Math.round(calculoIbuTotal())}`);
document.write("<br>");
document.write(`Los IBUs de tu cerveza son iguales a ${Math.round(calculoIbuTotal())}`);
document.write("<hr>");



//--------------------CALCULOS DEL COLOR DE LA CERVEZA----------------////

let mcu = ((pilsen.kilos * pilsen.color + cara30.kilos * cara30.color + cara60.kilos * cara60.color + cara120.kilos * cara120.color + chocolate.kilos * chocolate.color) / litros) * 8.462;

let srm = Math.round(1.5 * mcu ** 0.7);

document.write(`El color de su cerveza es de SRM = ${srm}`);
document.write("<br><br>");
if((srm >= 1) && (srm <=3)){
    document.write("<img src='beer-1-3.PNG'/>");
}else if((srm >= 4) && (srm <=5)){
    document.write("<img src='beer-4-5.PNG'/>");
}else if((srm >= 6) && (srm <=7)){
    document.write("<img src='beer-6-7.PNG'/>");
}else if((srm >= 8) && (srm <=9)){
    document.write("<img src='beer-8-9.PNG'/>");
}else if((srm >= 10) && (srm <=12)){
    document.write("<img src='beer-10-12.PNG'/>");
}else if((srm >= 13) && (srm <=16)){
    document.write("<img src='beer-13-16.PNG'/>");
}else if((srm >= 17) && (srm <=20)){
    document.write("<img src='beer-17-20.PNG'/>");
}else if((srm >= 21) && (srm <=25)){
    document.write("<img src='beer-21-25.PNG'/>");
}else if((srm >= 26) && (srm <=30)){
    document.write("<img src='beer-26-30.PNG'/>");
}else if((srm >= 31) && (srm <=35)){
    document.write("<img src='beer-31-35.PNG'/>");
}else if((srm >= 36) && (srm <=39)){
    document.write("<img src='beer-36-39.PNG'/>");
}else if((srm >= 40) && (srm <=50)){
    document.write("<img src='beer-40-50.PNG'/>");
}else if(srm > 50){
    document.write("<img src='beer+50.PNG'/>");
}












