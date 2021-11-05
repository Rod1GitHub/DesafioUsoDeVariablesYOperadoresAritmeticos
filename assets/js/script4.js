//Ejercicio 4 - Calculadora de días
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


