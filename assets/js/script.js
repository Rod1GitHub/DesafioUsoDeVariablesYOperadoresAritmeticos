//Ejercicio 1
// No incluido en este archivo

/* // Ejercicio 2 - Operaciones con dos números
// Solicitar números al usuario y guardarlos en variables
var n1 = prompt ('Ingrese un primer número entero mayor a cero: ');
var n2 = prompt ('Ingrese un segundo número entero mayor a cero y diferente al anterior: ');

//Convertir en números operables aritméticamente
var n2 = parseInt(n2); 
var n1 = parseInt(n1);

//Operar

var suma = (n1+n2);
var resta = (n1-n2);
var multi = (n1*n2);
var divi = (n1/n2);
var modulo = (n1%n2);

//Mostrar resultado
document.write(`Los números ingresados son ${n1} y ${n2}. La suma es igual a ${suma}; La resta es igual a ${resta}; La multiplicación es igual a ${multi}; La división es igual a ${divi}, y el módulo es igual a ${modulo}.`);
 */



/* // Ejercicio 3 - Grados Celcius a grados Kelvin y Fahrenheit.
// Solicitar variables al usuario
var celcius = prompt ('Ingrese cantidad de grados celcius a calcular: ');
//Convertir en números operables aritméticamente
var celcius = parseInt(celcius);
// Calcular y asignar a una variable
var celciusToKelvin = celcius + 273.15;
var celciusToFahrenheit = (celcius *9/5) + 32
//Mostrar resultado
document.write(`Los grados celcius ingresados son ${celcius}. La conversión a Kelvin es igual a ${celciusToKelvin}. La conversión a Fahtenheit es igual a ${celciusToFahrenheit}. Muchas gracias.`) */

/* //Ejercicio 4 - Calculadora de días
// Solicitar variables al usuario
var days = prompt('Ingrese el número de días: ');
//Convertir en números operables aritméticamente
var days = parseInt(days);
// Calcular y asignar a variable
var years = Math.floor(days / 365);
var weeks = Math.floor((days % 365) / 7);
var remainingDays = Math.floor((days % 365) % 7);

// Mostrar Resultado 
document.write(`Los días ingresados son ${days}. Los años son ${years}. Las semans son ${weeks}. Los días son ${remainingDays}. Gracias!`);
 */

//Ejercicio 5 - Solicitar 5 números

// Solicitar números al usuario y guardarlos en variables
var num1 = prompt ('Ingrese un primer número entero: ');
var num2 = prompt ('Ingrese un segundo número entero: ');
var num3 = prompt ('Ingrese un tercer número entero: ');
var num4 = prompt ('Ingrese un cuarto número entero: ');
var num5 = prompt ('Ingrese un quinto número entero: ');

//Convertir en números operables aritméticamente
var num1 = parseInt(num1); 
var num2 = parseInt(num2); 
var num3 = parseInt(num3); 
var num4 = parseInt(num4); 
var num5 = parseInt(num5); 

//Operar
var sumaDeNumeros = (num1 + num2 + num3 + num4 + num5);
var promedioDeNumeros = (sumaDeNumeros / 5 );

// Mostrar Resultado 
document.write(`Los números ingresados son ${num1}, ${num2}, ${num3}, ${num4}, ${num5}. La suma de los números ingresados es ${sumaDeNumeros}. El promedio de los números ingresados es ${promedioDeNumeros}. Gracias!`);

