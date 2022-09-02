// Variables

const btnEnviar = document.querySelector('#enviar');

cargarEventListeners();
function cargarEventListeners () {
    document.addEventListener('DOMContentLoaded', iniciarApp);
}

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('opacity-50', 'opacity-50');
}
