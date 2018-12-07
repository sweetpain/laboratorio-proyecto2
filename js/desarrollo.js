// Una persona deposita hoy al Banco cierta cantidad de dinero, donde le reconocen un interés del 2%
// mensual, capitalizado mensualmente. ¿Cuál será el saldo al cabo de 5 años?
// Formula a utilizar: Valor Futuro = Valor Presente * (1+intereses)^meses
// Para solucionar el Ejercicio, se requiere desarrollar un script que permita conocer a una persona
// ¿Cuál será el saldo al cabo de 5 años?, si al depositar hoy cierta cantidad de dinero.
// Como resultado se debe imprimir en el documento HTML:
// Valor consignado: $XXXXX
// Valor futuro en 5 años: $XXXXXXX

var cantidad= parseInt(prompt("digite el valor que digito en el banco"));
var meses=60;
var interes=0.02;


var resultado= (Math.pow(1+interes,meses));
var operacion= cantidad*resultado;

document.write("<h1>"+"el valor que ustd digito fue"+cantidad+"</h1>")
document.write("<h1>"+"el valor a 60 meses con interes es"+operacion+"</h1>")








// Una frutería ofrece las manzanas a $4.200 el kilo, con un descuento de acuerdo a la siguiente tabla:
// Desarrollar un script que permita a la frutería y al cliente (Pedir la cantidad de quilos a comprar)
// conocer cuanto pagará un cliente que compre manzanas.
// Mostrar en el documento HMTL los resultados así:
// La compra de N kilos tiene un valor de $, pero tiene un descuento por valor de $, por lo tanto el
// valor a pagar es: $.

var numkilos=prompt("digite el numero de kilos que desea llevar");
var valorkilo=4200;
 
  var operacion2=valorkilo*numkilos;
if( numkilos>0 && numkilos<=2){
    var descuento=0*operacion2;
   var operacion=operacion2-descuento;
}
else if (numkilos>2,01 && numkilos<=5){
   var descuento=0.1*operacion2;
   var operacion=operacion2-descuento;
} 
 
 else if (numkilos>5,01 && numkilos<=10){
    var descuento=0.15*operacion2;
     var operacion= voperacion2-descuento;
} 
 else if (numkilos>=10,01){
    var descuento=0.20*operacion2;
   var operacion= operacion2-descuento;
}

// document.write("<h1>kilos comprados "+numkilos+"esta es la multiplicacion de los kilos por el valor individual "+operacion2+" este es el descuento "+descuento+"esto es lo que tiene que pagar "+operacion+"</h1>")


// 3. Dada la siguiente función:
// Y= x^2 – 2x
// Se requiere desarrollar un algoritmo que imprima en pantalla, para valores de x desde 1 a 10, lo
// siguiente:
// a. La suma de todos los valores de Y.
// b. Valores de Y múltiplos de 3.
// c. Suma de los valores de Y múltiplos de 3.
// d. Valores de Y cuyo último digito sea 5.
// e. Suma de los valores de Y cuyo último digito es 5.
// Resultados esperados:
// a. Suma de todos los valores de Y
// 275
// b. Valores de Y múltiplos de 3:3
// • 15
// • 24
// c. Suma de los valores de Y múltiplos de 3
// 153
// d. Valores de Y cuyo último digito es 5
// • 15
// • 35
// e. Suma de los valores de Y cuyo último digito es múltiplo de 5
// 50










// Desarrollar un script que lea un número N entero positivo de cualquier número de dígitos, calcule la
// suma de sus dígitos y que imprima en pantalla el número leído y la suma de sus dígitos.
// Se requiere que en el desarrollo utilice la Estructura Cíclica Mientras.
// Ejemplo: N= 3567 SUMA= 21







var number = parseInt(prompt("Ingresa un numero"));
var number2= parseInt(prompt("Ingresa un numero"));
var number3= parseInt(prompt("Ingresa un numero"));
var number4= parseInt(prompt("Ingresa un numero"));

document.write("<h1>La suma de estos numeros ", String(number) + String(number2) + String(number3) + String(number4)+" es ",(number)+(number2)+(number3)+(number4)  );

// var num;
// var sum;
// var sum1;
// var number1;
// var number2;
// var number3;
// var number4;
// var number=prompt("Ingresar un numero");
// number1=num/10;
// number2=num (Mod);
// sum1=sum+number2;
// number1=number1-(number2+0.1);
// if(number1>0){

// }
// number3=number1/10;
// number4=number1(Mod);
// sum1=sum+number4;
// number1=number3-(number4+0.1);




// Desarrollar un script que calcule el salario neto que debe recibir un vendedor de un almacén. Se
// debe tener en cuenta si tiene derecho o no al auxilio de transporte.
// Para el desarrollo del ejercicio tenga en cuenta las siguientes formulas:
// Sueldo devengado = salario básico * días laborados / 30.
// Días laborados = debe ser entre 1 y 30.
// Auxilio de Transporte: Lo reciben los empleados cuyo salario básico sea menor o igual a 2 salarios
// mínimos legales vigentes.
// Salario Mínimo Legal Vigente(2018): 781.242
// Auxilio de Transporte = 88.211 * días laborados / 30 (año 2018 en Colombia).
// Comisión de Ventas: En la empresa se tiene estipulado dar una comisión de ventas del 2% sobre las
// ventas del mes de cada vendedor.
// Total devengado = sueldo devengado + comisión de ventas.
// Total deducciones = descuentos por prestamos. 
// Salario Neto = Total devengado – Total deducciones
// Como resultado el script debe imprimir en pantalla lo siguiente:
// Cedula empleado: XXXXXX
// Nombre Empleado: XXXXXXX
// Salario Básico: XXXXXX
// Auxilio de Transporte: XXXXXX
// Comisión de Ventas: XXXXXX
// Préstamos: XXXXXX
// Salario Neto a Recibir: XXXXX

var card=prompt("Ingrese Cedula");
var name=prompt("Nombre del vendedor");
var salary=prompt("Ingrese el valor de su sueldo mensual");
var dayslab=prompt("Dias Laborados");
var sale=prompt("Valor de sus ventas")
var loans=prompt("Prestamos dilingenciados");

if(salary<=1562484){
    var trabajo=(salary*dayslab)/30;
    var comision=sale*0.2;
    var auxilio=(88.211*dayslab)/30;
    var comision=sale*0.2;
    var deuda=loans;
   var total =(trabajo+comision+auxilio)-loans;
s
}else if(salary>1562484){

    var comision=sale*0.2;
    var trabajo=(salary*dayslab)/30;
    var deuda=loans;
    var total =(trabajo+comision)-loans;
}
document.write("Cedula Empleado :"+card+ "<br>");
document.write("Nombre Empleado "+name+ "<br>");
document.write("salary Básico "+salary+ "<br>");
document.write("Auxilio de Transporte: "+auxilio+ "<br>");
document.write("Comisión de venta: "+comision+ "<br>");
document.write("Préstamos "+deuda+ "<br>");
document.write("salario Neto a Recibir: "+total+ "<br>");



// /* . Desarrollar un script que permita calcular los siguientes datos de una fiesta:
// ¿Cuántas personas asistieron a la fiesta?
// ¿Cuántos hombres y cuantas mujeres?
// Promedio de edades por sexo.
// La edad de la persona más joven que asistió.
// Consideraciones:
// • No se permiten menores de edad a la fiesta.
// • Ingresar datos hasta que se ingrese una edad igual a cero. */


var sexgender=prompt("Por favor ingrese su genero");
var age=parseInt(prompt("Por favor ingrese su edad"));
debugger;
while(sexgender!=isNaN && isNaN(age)){
    alert("Por favor ingrese valores validos");
    sexgender=prompt("Por favor ingrese su genero");
    age=parseInt(prompt("Por favor ingrese su edad"));
}
while (age<18){
    alert("Lo sentimos pero no puedes ingresar a la fiesta")
    sexgender=prompt("Por favor ingrese su genero");
    age=parseInt(prompt("Por favor ingrese su edad"));
}
var countmen=0;
var countwomen=0;
var agewomen=0;
var agemen=0;
while (age!=0) {
    if(sexgender=="hombre"){
        countmen++;
        agemen=agemen+age;
    }
    else if(sexgender=="mujer"){
        countwomen++;
        agewomen=agewomen+age; 
    }
    sexgender=prompt("Por favor ingrese su genero");
    age=parseInt(prompt("Por favor ingrese su edad"));
}

var sum=countmen+countwomen;
var avgwomen=agewomen/countwomen;
var avgmen=agemen/countmen;
document.write("<p>A la fiesta ingresaron "+sum+"</p><p>Ingresaron "+countmen+" hombres</p><p>Ingresaron "+countwomen+" mujeres");
document.write("<p>El promedio de edad por hombres es de: "+avgmen+"</p><p>El promedio de edad por mujeres es de: "+avgwomen+"</p>");





