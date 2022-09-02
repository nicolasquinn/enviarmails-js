// Variables

const btnEnviar = document.querySelector('#enviar');

const inputEmail = document.querySelector('#email');
const inputAsunto = document.querySelector('#asunto');
const inputMensaje = document.querySelector('#mensaje');

cargarEventListeners();
function cargarEventListeners () {

    document.addEventListener('DOMContentLoaded', iniciarApp);

    inputEmail.addEventListener('blur', validarFormulario);
    inputAsunto.addEventListener('blur', validarFormulario);
    inputMensaje.addEventListener('blur', validarFormulario);
}

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('opacity-50', 'opacity-50');
}

function validarFormulario (e) {
    if (e.target.value.length > 0) {
        console.log("Hay datos")
        e.target.classList.remove('formulario-vacio');
    } else {
        e.target.classList.add('formulario-vacio');
    }
}