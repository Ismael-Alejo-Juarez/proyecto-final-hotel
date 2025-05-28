// Inputs
const nusuarioInput = document.getElementById("usuario-inp");
const npassInput = document.getElementById("pass-inp");
const cnpassInput = document.getElementById("cnpass-inp");
const telefonoInput = document.getElementById("telefono-inp");
// Errores
const errorUsuario = document.getElementById("error-usuario");
const errorPass = document.getElementById("error-pass");
const errorcnPass = document.getElementById("error-cnpass");
const errorTel = document.getElementById("error-tel");
// Botones
const btnCancelar = document.getElementById("cancelar-registro");
const btnAceptar = document.getElementById("aceptar-registro");
// ReGex
const dosEspacios = / {2,}/;
const sinEspacios = / {1,}/;
const numTelefono = /^\d{10}$/;
const contieneLetras = /[a-zA-Z]/;

function validarUsuario() {
    // Usuario
    const usuario = nusuarioInput.value.trim();
    let validar = false;
    // Primero verificamos que no contenga más de dos espacios
    if (!dosEspacios.test(usuario)) {
        // Todo bien, se continua con:
        if (usuario.length > 5) {
            // Todo bien, solo falto confirmar que no exista:
            if (true) {
                console.log("Usuario: OK");
                errorUsuario.style.display = "none";
                validar = true;
            } else {
                errorUsuario.textContent = "Este usuario ya está en uso"
                errorUsuario.style.display = "block";
            }
        } else {
            errorUsuario.textContent = "El usuario debe tener más de 5 caracteres";
            errorUsuario.style.display = "block";
        }
    } else {
        errorUsuario.textContent = "No puedes usar más de dos espaciados"
        errorUsuario.style.display = "block";
    }
    return validar;
}

function validarContraseña() {
    const pass = npassInput.value;
    const cnpass = cnpassInput.value;
    let validar = false;
    if (pass.length > 5) {
        // Si es más largo
        console.log("Contraseña: OK");
        errorPass.style.display = "none";
        validar = true;
    } else {
        errorPass.textContent = "La contraseña debe tener más de 5 caracteres";
        errorPass.style.display = "block";
    }
    // Confirmar contraseña
    if (cnpass !== pass) {
        errorcnPass.textContent = "Las contraseñas no coinciden";
        errorcnPass.style.display = "block";
        validar = false;
    }else{
        errorcnPass.style.display = "none";
    }
    return validar;
}

function validarTelefono() {
    const telefono = telefonoInput.value;
    let validar = false;
    if (!sinEspacios.test(telefono)) {
        // Bien, no tiene espacios
        if (numTelefono.test(telefono)) {
            console.log("Teléfono: OK");
            errorTel.style.display = "none";
            validar = true;
        } else {
            // Tengo que saber la razón por la que falló
            if (contieneLetras.test(telefono)) {
                // Ej. 6341b9a14a
                errorTel.textContent = "No debe contener letras";
            } else if (telefono.length > 10) {
                // Ej. 6341096149 --> +1
                errorTel.textContent = "No deben ser más de 10 digitos";
            } else {
                // Ej. 634-109-6149 (Aunque podría ser válido, no quiero que lo sea)
                errorTel.textContent = "El formato es incorrecto"
            }
            errorTel.style.display = "block";
        }
    } else {
        errorTel.textContent = "No debe llevar espacios";
        errorTel.style.display = "block";
    }
    return validar;
}

function validarDatos() {
    let contador = 0;
    if (validarUsuario()) {
        // Es válido
        contador++;
    }
    if (validarContraseña()) {
        // Es válido
        contador++;
    }
    if (validarTelefono()) {
        // Es válido
        contador++;
    }
    if (contador === 3) {
        // Todas fueron válidas
        console.log("Registro: OK");
    }
}

function cancelarRegistro() {
    window.location.href = "../html/login.html";
}

btnAceptar.addEventListener("click", validarDatos);
btnCancelar.addEventListener("click", cancelarRegistro);