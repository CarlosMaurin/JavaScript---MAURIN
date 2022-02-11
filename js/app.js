alert("Bienvenido al BREW-LAB. A continuacion crearemos tu receta");


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


class Granos{
    constructor(nombre, extracto, color, utiliza, kilos, libras, densidad, mcu){
        this.nombre = nombre;
        this.extracto = extracto;
        this.color = color;
        this.utiliza = utiliza;
        this.kilos = kilos;
        this.libras = libras;
        this.densidad = densidad;
        this.mcu = mcu
    }
    calculoDensidad(){
        if(this.utiliza == "SI"){
            this.densidad = this.libras * this.extracto * eficiencia;
        }
    }
}

const fermentables = []; 

fermentables.push(new Granos ("pilsen", 37, 2, false, 0, 0, 0, 0));
fermentables.push(new Granos ("cara30", 35, 30, false, 0, 0, 0, 0));
fermentables.push(new Granos ("cara60", 34, 60, false, 0, 0, 0, 0));
fermentables.push(new Granos ("cara120", 33, 120, false, 0, 0, 0, 0));
fermentables.push(new Granos ("chocolate", 29, 400, false, 0, 0, 0, 0));

for(let i=0; i<fermentables.length; i+=1){
    fermentables[i].utiliza = prompt(`te gustaría usar malta ${fermentables[i].nombre}? Ingrese SI en caso afirmativo. Ingrese NO en caso negativo`).toUpperCase();
}

for(let i=0; i<fermentables.length; i+=1){
    if(fermentables[i].utiliza == "SI"){
        fermentables[i].kilos = parseInt(prompt(`Cuantos kilos de malta ${fermentables[i].nombre} deseas usar?`));
        fermentables[i].libras = fermentables[i].kilos / 0.453592;
        
    }
}

document.write("<br> <br>");
document.write(`Ud utilizará en su receta la siguiente lista de maltas`);
document.write("<br> <br>");    

for(let i=0; i<fermentables.length; i+=1){
    if(fermentables[i].kilos > 0){
        document.write(`${fermentables[i].kilos} kilos de malta ${fermentables[i].nombre} <br>`);
        fermentables[i].calculoDensidad();
    }
}


const densidadInicial = (fermentables.map(item => item.densidad).reduce((prev, curr) => prev + curr, 0)) / galones + 1000;


alert(`La densidad inicial de tu cerveza es igual a ${Math.round(densidadInicial)}`);
document.write("<br>");
document.write(`La densidad inicial de tu cerveza es igual a ${Math.round(densidadInicial)}`);
document.write("<hr>");


//---------------------CALCULOS DE LUPULO---------------------------////

alert("A continuación calcularemos los IBUs de nuestra receta");

let factorCorreccion = 7.489;

let correccionDensidad;

if(densidadInicial <= 1050){
    correccionDensidad = 1;
}else{
    correccionDensidad = 1 + (((densidadInicial - 1050) / 1000) / 0.2);
}


class Lupulo{
    constructor (nombre, AA, gramos, onzas, tiempo, ibu, utiliza){
        this.nombre = nombre;
        this.AA = AA;
        this.gramos = gramos;
        this.onzas = onzas;
        this.tiempo = tiempo;
        this.ibu = ibu;
        this.utiliza = utiliza;
    }
    calculoIbu (){
            this.ibu = ((this.onzas * this.tiempo * this.AA * factorCorreccion) / (galones*correccionDensidad))*1000;
        }
    
}

let arrLupulo = [];

arrLupulo.push(new Lupulo("cascade", 0.08, 0, 0, 0, 0, false));
arrLupulo.push(new Lupulo("Kent goldings", 0.05, 0, 0, 0, 0, false));
arrLupulo.push(new Lupulo("Bravo", 0.12, 0, 0, 0, 0, false));
arrLupulo.push(new Lupulo("Ekuanot", 0.11, 0, 0, 0, 0, false));
arrLupulo.push(new Lupulo("Simcoe", 0.11, 0, 0, 0, 0, false));


for(i=0; i<arrLupulo.length; i+=1){
    arrLupulo[i].utiliza = prompt(`desea utilizar lúpulo ${arrLupulo[i].nombre} en su receta? Ingrese SI en caso afirmativo. Ingrese NO en caso negativo`).toUpperCase();
}


for(i=0; i<arrLupulo.length; i+=1){
    if(arrLupulo[i].utiliza == "SI"){
        arrLupulo[i].gramos = prompt(`cuántos gramos de ${arrLupulo[i].nombre} desea utilizar?:`);
        arrLupulo[i].onzas = arrLupulo[i].gramos * 0.035274;
        arrLupulo[i].tiempo = parseInt(prompt("Durante cuántos minutos de hervor?"));
    }
}

for(i=0; i<arrLupulo.length; i+=1){
    if((arrLupulo[i].tiempo >= 0) && (arrLupulo[i].tiempo <= 9)){
        arrLupulo[i].tiempo = 0.06; 
    }else if ((arrLupulo[i].tiempo >= 10) && (arrLupulo[i].tiempo <= 19)){
        arrLupulo[i].tiempo = 0.15;
    }else if ((arrLupulo[i].tiempo >= 20) && (arrLupulo[i].tiempo <= 29)){
        arrLupulo[i].tiempo = 0.19;
    }else if ((arrLupulo[i].tiempo >= 30) && (arrLupulo[i].tiempo <= 44)){
        arrLupulo[i].tiempo = 0.24;
    }else if ((arrLupulo[i].tiempo >= 45) && (arrLupulo[i].tiempo <= 59)){
        arrLupulo[i].tiempo = 0.27;
    }else if ((arrLupulo[i].tiempo >= 60) && (arrLupulo[i].tiempo <= 74)){
        arrLupulo[i].tiempo = 0.30;
    }else if (arrLupulo[i].tiempo >= 75){
        arrLupulo[i].tiempo = 0.34;
    }
    
}

for(i=0; i<arrLupulo.length; i+=1){
    arrLupulo[i].calculoIbu();
}

const ibuTotal = (arrLupulo.map(item => item.ibu).reduce((prev, curr) => prev + curr, 0));

alert(`Los IBUs de tu cerveza son iguales a ${Math.round(ibuTotal)}`);
document.write("<br>");
document.write(`Los IBUs de tu cerveza son iguales a ${Math.round(ibuTotal)}`);
document.write("<hr>");


//--------------------CALCULOS DEL COLOR DE LA CERVEZA----------------////

for(i=0; i<fermentables.length; i+=1){
   fermentables[i].mcu = fermentables[i].kilos * fermentables[i].color;
}



const mcuTotal = ((fermentables.map(item => item.mcu).reduce((prev, curr) => prev + curr, 0)) / litros) * 8.462;;


let srm = Math.round(1.5 * mcuTotal ** 0.7);

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





