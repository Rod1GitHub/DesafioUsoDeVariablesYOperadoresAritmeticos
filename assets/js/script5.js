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

