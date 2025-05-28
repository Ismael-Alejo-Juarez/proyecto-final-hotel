const usuarioInput = document.getElementById("usuario-inp");
const passInput = document.getElementById("pass-inp");
const errorLabel = document.getElementById("error-login");
const btnCancelar = document.getElementById("cancelar-login");
const btnAceptar = document.getElementById("aceptar-login");

/* Regex para las validaciones */
const dosEspacios = / {2,}/g;

function validarDatos() {
    /* Aquí no importa si cumplen los requisitos, simplemente se buscan */
    const usuario = usuarioInput.value.replace(/ {2,}/g, " ");
    const pass = passInput.value;
    /* Se manda a buscar el usuario, una vez encontrado, se compara con su contraseña */
    if (usuario === "Ismael" && pass === "ismael") {
        // Se encontró y la contraseña es válida
        errorLabel.style.display = "none";
    }else{
        // Uno de los datos no es correcto
        errorLabel.style.display = "block";
    }
}

function cancelarLogin() {
    window.location.href = "../index.html";
}

btnCancelar.addEventListener("click", cancelarLogin);
btnAceptar.addEventListener("click", validarDatos);