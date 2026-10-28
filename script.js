// ==============================================================
// LÓGICA JAVASCRIPT SIMPLE Y PRINCIPIANTE (3ER SEMESTRE)
// ==============================================================

// Función 1: Cambiar entre pestañas/secciones de la página
function cambiarSeccion(idSeccion, idTab) {
    // Ocultar todas las secciones
    var secciones = document.getElementsByClassName("seccion-contenido");
    for (var i = 0; i < secciones.length; i++) {
        secciones[i].classList.remove("activa");
    }

    // Desactivar todos los botones de las pestañas
    var botones = document.getElementsByClassName("btn-tab");
    for (var j = 0; j < botones.length; j++) {
        botones[j].classList.remove("activo");
    }

    // Mostrar la sección elegida y marcar su botón como activo
    document.getElementById(idSeccion).classList.add("activa");
    document.getElementById(idTab).classList.add("activo");
}

// Función 2: Copiar texto al portapapeles usando JavaScript clásico
function copiarTexto(idElemento) {
    var bloqueCodigo = document.getElementById(idElemento);
    var texto = bloqueCodigo.innerText;

    // Crear caja de texto temporal
    var areaTemporal = document.createElement("textarea");
    areaTemporal.value = texto;
    document.body.appendChild(areaTemporal);

    // Seleccionar y copiar el contenido
    areaTemporal.select();
    document.execCommand("copy");

    // Borrar el elemento temporal de la memoria
    document.body.removeChild(areaTemporal);

    // Mostrar mensaje de confirmación durante 3 segundos
    var mensaje = document.getElementById("mensaje-alerta");
    mensaje.style.display = "block";

    setTimeout(function() {
        mensaje.style.display = "none";
    }, 3000);
}
