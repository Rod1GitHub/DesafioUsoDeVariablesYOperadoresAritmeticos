
// Ejercicio 3 - Grados Celcius a grados Kelvin y Fahrenheit.
// Solicitar variables al usuario
var celcius = prompt ('Ingrese cantidad de grados celcius a calcular: ');
//Convertir en números operables aritméticamente
var celcius = parseInt(celcius);
// Calcular y asignar a una variable
var celciusToKelvin = celcius + 273.15;
var celciusToFahrenheit = (celcius *9/5) + 32
//Mostrar resultado
document.write(`Los grados celcius ingresados son ${celcius}. La conversión a Kelvin es igual a ${celciusToKelvin}. La conversión a Fahtenheit es igual a ${celciusToFahrenheit}. Muchas gracias!`) 
