//Che JS, del documento traeme el elemento que tiene por id "logo"

//getElementById
const logo = document.getElementById('logo');
//console.log(logo);
//console.dir(logo);

//getElementByClassName
//const parrafos = document.getElementsByClassName('parrafo');
//console.log(parrafos[0].innerHTML);

//getElementsByTagName
//Va a tomar todos los "p" que hay en la pagina
const pTag = document.getElementsByTagName('p');
console.log(pTag);
//Recorremos el array
for (let i = 0; i < pTag.length; i++)   {
    console.log(pTag[i].innerHTML);
}

let pTagArr = [...pTag];
console.log(pTagArr);

// pTagArr.forEach(item => {
//     console.log(item.innerHTML);
// });

//QuerySelector
//Devuelve la primera coincidencia del elemento, sino devuelve null
const header = document.querySelector('.header');
console.log(header.innerHTML);
console.log(header.textContent);

// const p =document.querySelector('.parrafo');
// console.log(p.innerHTML);

const p =document.querySelectorAll('.parrafo');
console.log(p[0].innerHTML);

//Agregamos texto dentro de un parrafo
const addText = document.getElementById('agregar-texto');
console.log(addText.innerHTML)
addText.innerHTML = '<b>Hola estamos agregando texto</b>';
console.log(addText);

//Set time out (es como un timer)
setTimeout(() => {
    console.log('Timer');
}, 2000 )

// Set interval
const repetirCadaSegundo = () => {
    setInterval(mandarLog, 2000);
};

const mandarLog = () => {
    console.log('Pasaron 2 segundos')
};

repetirCadaSegundo();

//Location

let url = document.createElement('a');

url.href = 'https://www.google.com';
console.log(url.protocol);
console.log(url.host);

//Si quiero saber la pagina en la que estoy parado
console.log(window.location.href);

//Si quiero saltar a una pagina especifica
//window.location = 'https://www.google.com';

//Creamos un elemento desde js

//1. Traemos el contenedor donde queremos agregar la etiqueta y lo guardamos en una variable.
//2. Creamos ele elemento en este caso un h2.
//3. A ese elemento le agregamos el contenido.
//4. Agregamos el elemento al contenedor.

//Creamos una variable para reutilizar la manipulacion de ese elemento
const contenedor = document.getElementById('contenedor');
console.log(contenedor);   

//Creamos un elemento
const h2 = document.createElement('h2');

//Creamos el contenido para esa etiqueta
h2.textContent = 'Hola estoy escribiendo html desde js';

//Tenemos que agregar este h2 en algun lado del html
contenedor.appendChild(h2);