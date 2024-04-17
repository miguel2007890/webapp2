// Función para mostrar la página principal
function mostrarPaginaPrincipal() {
    document.getElementById("seccio_0").style.display = "none"; // Ocultar la sección de inicio de sesión
    document.getElementById("menu").style.display = "flex"; // Mostrar el menú
    document.getElementById("seccio_1").style.display = "flex"; // Mostrar la página principal
}

// Función para mostrar la sección de inicio de sesión al principio
function mostrarInicioDeSesion() {
    document.getElementById("menu").style.display = "none"; // Ocultar el menú
    document.getElementById("seccio_1").style.display = "none"; // Ocultar la página principal
    document.getElementById("seccio_0").style.display = "flex"; // Mostrar la sección de inicio de sesión
}

// Manejador de clics para el botón de iniciar sesión
document.getElementById("iniciar_sesion").addEventListener("click", function() {
    mostrarPaginaPrincipal();
});
// Manejadores de clics para los botones del menú
document.getElementById("boto_1").addEventListener("click", function() {
    mostrarPaginaPrincipal();
});

document.getElementById("boto_2").addEventListener("click", function() {
    document.getElementById("seccio_2").style.display = "flex"; // Mostrar la sección de productos
    document.getElementById("seccio_1").style.display = "none"; // Ocultar la página principal
    document.getElementById("seccio_3").style.display = "none"; // Ocultar otras secciones si es necesario
    document.getElementById("seccio_4").style.display = "none";
    document.getElementById("seccio_0").style.display = "none"; // Ocultar la sección de inicio de sesión si es necesario
    document.getElementById("seccio_5").style.display = "none";
});

document.getElementById("boto_3").addEventListener("click", function() {
    document.getElementById("seccio_3").style.display = "flex"; // Mostrar la sección de carrito de compras
    document.getElementById("seccio_1").style.display = "none"; // Ocultar la página principal
    document.getElementById("seccio_2").style.display = "none"; // Ocultar otras secciones si es necesario
    document.getElementById("seccio_4").style.display = "none";
    document.getElementById("seccio_0").style.display = "none"; // Ocultar la sección de inicio de sesión si es necesario
    document.getElementById("seccio_5").style.display = "none";
});

document.getElementById("boto_4").addEventListener("click", function() {
    document.getElementById("seccio_4").style.display = "flex"; // Mostrar la sección de miembros del grupo
    document.getElementById("seccio_1").style.display = "none"; // Ocultar la página principal
    document.getElementById("seccio_2").style.display = "none"; // Ocultar otras secciones si es necesario
    document.getElementById("seccio_3").style.display = "none";
    document.getElementById("seccio_0").style.display = "none"; // Ocultar la sección de inicio de sesión si es necesario
    document.getElementById("seccio_5").style.display = "none";
});
document.getElementById("boto_5").addEventListener("click", function() {
    document.getElementById("seccio_4").style.display = "none"; // Mostrar la sección de miembros del grupo
    document.getElementById("seccio_1").style.display = "none"; // Ocultar la página principal
    document.getElementById("seccio_2").style.display = "none"; // Ocultar otras secciones si es necesario
    document.getElementById("seccio_3").style.display = "none";
    document.getElementById("seccio_0").style.display = "none"; // Ocultar la sección de inicio de sesión si es necesario
    document.getElementById("seccio_5").style.display = "flex";
});
// Manejador de clics para el botón "tornar" en cada página
document.querySelectorAll("#tornar").forEach(function(button) {
    button.addEventListener("click", function() {
        mostrarPaginaPrincipal(); // Volver a la página principal
    });
});

// Al cargar la página, mostrar la página de inicio de sesión
mostrarInicioDeSesion();
// Manejador de clics para el botón "tornar" en cada página
document.querySelectorAll("#tornar").forEach(function(button) {
    button.addEventListener("click", function() {
        document.querySelectorAll(".seccio").forEach(function(section) {
            section.style.display = "none"; // Ocultar todas las secciones
        });
        document.getElementById("seccio_1").style.display = "flex"; // Mostrar solo la página principal
    });
});
document.getElementById('sortir').addEventListener('click', function() {
    // Mostrar el diálogo de confirmación
    document.getElementById('dialogo').classList.remove('oculto');
});

document.getElementById('cancelar').addEventListener('click', function() {
    // Ocultar el diálogo y volver a la página principal
    document.getElementById('dialogo').classList.add('oculto');
    window.location.href = 'pagina_principal.html';
});

document.getElementById('confirmar').addEventListener('click', function() {
    // Salir de la aplicación
    window.close();
});
