// Variables.

const inputEmail = document.querySelector('#email');
const inputAsunto = document.querySelector('#asunto');
const inputMensaje = document.querySelector('#mensaje');

const formulario = document.querySelector('#enviar-mail');

const btnEnviar = document.querySelector('#enviar');
const btnResetear = document.querySelector('#resetBtn');

// Event listeners.

eventListeners();
function eventListeners () {
    // Al cargar la página
    document.addEventListener('DOMContentLoaded', desactivarEnviar);

    // Al entrar y después de salir de cada input.
    inputEmail.addEventListener('blur', validarFormulario);
    inputAsunto.addEventListener('blur', validarFormulario);
    inputMensaje.addEventListener('blur', validarFormulario);

    // Click en botones
    btnResetear.addEventListener('click', resetearFormulario);
    btnEnviar.addEventListener('click', enviarFormulario);
}

// Funciones.

function desactivarEnviar (e) {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('btn-deshabilitado');
}

function activarEnviar (e) {
    btnEnviar.disabled = false;
    btnEnviar.classList.remove('btn-deshabilitado');
}

function inputsPorDefecto () {
    inputEmail.classList.remove('campo-lleno', 'campo-vacio');
    inputAsunto.classList.remove('campo-lleno', 'campo-vacio');
    inputMensaje.classList.remove('campo-lleno', 'campo-vacio');
}

function formularioPorDefecto () {
    
    formulario.reset(); // lo reinicio
    inputsPorDefecto(); // saco las clases/estilos
    desactivarEnviar(); // desactivo el btn de enviar
    eliminarAlerta(); // elimino la alerta existente (si es que hay)

}

function validarFormulario (e) {

    // Valido si el campo tiene texto o no.
    const campo = e.target;

    if (campo.value === '') {
        campo.classList.remove('campo-lleno');
        campo.classList.add('campo-vacio');
        desactivarEnviar();
        mostrarAlerta('Todos los campos son obligatorios.', 'red');
    } else {
        campo.classList.add('campo-lleno');
        validarTodos();
    }

    if (campo.type === 'email') {
        const verificacion = campo.value.indexOf('@');
        if (verificacion > 0) {
            campo.classList.remove('campo-vacio');
            campo.classList.add('campo-lleno');
        } else {
            campo.classList.remove('campo-lleno');
            campo.classList.add('campo-vacio');
            mostrarAlerta("Email inválido", 'orange');
        }
    }
    
}

function mostrarAlerta (msj, color) {

    // Verifico si no existe ninguna alerta
    const alertaExiste = document.querySelector('.alerta');
    if (alertaExiste === null) {
        // Creo la alerta
        const alerta = document.createElement('P');
        alerta.textContent = msj;
        alerta.classList.add('alerta');
        alerta.style.backgroundColor = color;
        formulario.appendChild(alerta);
    }

}

function eliminarAlerta () {
    const alertaExiste = document.querySelector('.alerta');
    if (alertaExiste !== null) {
        alertaExiste.remove()
    } 
}

function validarTodos () {
    const camposCompletados = document.querySelectorAll('.campo-lleno')
    if (camposCompletados.length === 3) {
        eliminarAlerta();
        activarEnviar();
    }
}

function resetearFormulario (e) {

    e.preventDefault();
    formularioPorDefecto();
    mostrarAlerta("Formulario limpio.", 'blue');
    setTimeout(() => {
        eliminarAlerta(); // elimino la alerta después de 3 seg.
    }, 3000);

}

function enviarFormulario (e) {
    e.preventDefault();

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    setTimeout(() => {
        spinner.style.display = 'none';
        formularioPorDefecto();
        mostrarAlerta("¡Formulario enviado exitosamente!", 'green');
    }, 5000);
    setTimeout(() => {
        eliminarAlerta();
    }, 8000);

}