var textoA = 'Harry';
var textoB = 'Potter';


// Concatenamos texto
console.log('La pelicula es: ' + textoA + ' ' + textoB);
//Usamos template strings
console.log(`La pelicula es: ${textoA} ${textoB}`);

console.log(5 == 5); //deviuelve true
console.log(5 == '5'); //devuelve true
console.log(5 === '5'); //devuelve false porque compara el tipo de dato

//Para saber que tipo de dato estoy manejando utilizo typeof
console.log(typeof 5);
console.log(typeof '5');
console.log(typeof true);
console.log(typeof 5.3);

//Prompt
let dato = prompt('Hola como te llamas?');
console.log(dato);

