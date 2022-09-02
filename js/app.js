// Variables

const btnEnviar = document.querySelector('#enviar');

const inputEmail = document.querySelector('#email');
const inputAsunto = document.querySelector('#asunto');
const inputMensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#enviar-mail');

cargarEventListeners();
function cargarEventListeners () {

    document.addEventListener('DOMContentLoaded', iniciarApp);

    inputEmail.addEventListener('blur', validarFormulario);
    inputAsunto.addEventListener('blur', validarFormulario);
    inputMensaje.addEventListener('blur', validarFormulario);
}

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('opacity-50', 'cursor-not-allowed');
}

function validarFormulario (e) {
    if (e.target.value.length > 0) {
        console.log("Hay datos")
        e.target.classList.remove('formulario-vacio');
    } else {
        e.target.classList.add('formulario-vacio');
        mostrarError();
    }
}

function mostrarError() {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = "Tienes que rellenar todos los campos.";
    mensajeError.classList.add('mensaje-error', 'error');

    const errores = document.querySelectorAll('.error')
    if (errores.length === 0) {
        formulario.appendChild(mensajeError);
    }

}