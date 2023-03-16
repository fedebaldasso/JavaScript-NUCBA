//AddEventListener
//1. Llamar al elemento
//2. A ese elemento pasarleun escuchador de eventos

const h3Alert = document.getElementById('h3Alert');

//Pasarle el evento y escribir directamente la funcion
// h3Alert.addEventListener('click', () => {
//     alert('Escuchando un evento click desde js');
// });

const mostrarAlerta = () => {
    alert('Escuchando un evento click pero a traves de una funcion');
    };

h3Alert.addEventListener('click', mostrarAlerta);

//----------------------------------------------------------------------

//Focus/Blur
const inputBlur = document.querySelector('#inputBlur');

//Events Listener
inputBlur.addEventListener('focus', focusFunction);
inputBlur.addEventListener('blur', blurFunction);

//Cuando hacemos focus sobre el input hace tal cosa
function focusFunction() {
    //cambiamos el background a amarillo
    inputBlur.style.backgroundColor = 'yellow';
    console.log('hiciste foco en el input');
}

//Cuando deselecccionamos ese input hace tal cosa
function blurFunction() {
    //Le sacamos el color de background que pusimos
    inputBlur.style.backgroundColor = '';
}

//------------------------------------------------------
//Change

const inputChange = document.getElementById('inputChange');

inputChange.addEventListener('change', mostrarAlertaChange);

function mostrarAlertaChange() {
    alert('Cambio mi value');
}