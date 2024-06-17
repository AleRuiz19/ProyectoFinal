(() => {
    "use strict";

    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault();
                    // Manejar la redirección según el formulario
                    if (form.id === "loginForm") {
                        window.location.href = "index.html"; // Redirigir al inicio después del inicio de sesión
                    }
                    // No redireccionar automáticamente para el formulario de reserva
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();

function validarFormulario(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add('was-validated');
    if (form.checkValidity()) {
        mostrarMensajeExito();
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    }
}

function mostrarMensajeExito() {
    const formContainer = document.querySelector('.form-container');
    formContainer.style.display = 'none';

    const mensajeExito = document.createElement('div');
    mensajeExito.classList.add('alert', 'alert-success', 'mt-3');
    mensajeExito.textContent = '¡Reserva realizada con éxito!';
    
    const volverAlInicioBtn = document.createElement('a');
    volverAlInicioBtn.href = 'index.html'; // Enlace al inicio de tu página
    volverAlInicioBtn.classList.add('btn', 'btn-primary', 'mt-3');
    volverAlInicioBtn.textContent = 'Volver al Inicio';

    formContainer.insertAdjacentElement('afterend', mensajeExito);
    formContainer.insertAdjacentElement('afterend', volverAlInicioBtn);
}

