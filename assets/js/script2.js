

// Ejercicio 2 - Operaciones con dos números
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
document.write(`Los números ingresados son ${n1} y ${n2}. La suma es igual a ${suma}; La resta es igual a ${resta}; La multiplicación es igual a ${multi}; La división es igual a ${divi}, y el módulo es igual a ${modulo}. Gracias!`);
 