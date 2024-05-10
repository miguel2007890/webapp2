// Función para volver a la sección de productos desde la página de selección de producto
function volverAProductos() {
    // Redirigir a la sección de productos
    window.location.href = 'prueba.html#productos';
}

// Función para agregar el producto al carrito
function agregarAlCarrito() {
    // Código para agregar el producto al carrito
    alert("Producte agregat al carret!");
    // Redirigir a la página de productos
    window.location.href = 'prueba.html#productos';
}

procuctoSeleccionado = JSON.parse(localStorage.getItem("productoSeleccionado")).nombre;
if (procuctoSeleccionado == "botella") {
    document.getElementById("producto-botella").style.display = "flex";
    document.getElementById("producto-cartro").style.display = "none";
    document.getElementById("producto-bosses").style.display = "none";
    document.getElementById("producto-gots").style.display = "none";
}

if (procuctoSeleccionado == "cartro.reutilitzable") {
    document.getElementById("producto-botella").style.display = "none";
    document.getElementById("producto-cartro").style.display = "flex";
    document.getElementById("producto-bosses").style.display = "none";
    document.getElementById("producto-gots").style.display = "none";
}

if (procuctoSeleccionado == "bosses.entrepa") {
    document.getElementById("producto-botella").style.display = "none";
    document.getElementById("producto-cartro").style.display = "none";
    document.getElementById("producto-bosses").style.display = "flex";
    document.getElementById("producto-gots").style.display = "none";
}

if (procuctoSeleccionado == "gots.cafe") {
    document.getElementById("producto-botella").style.display = "none";
    document.getElementById("producto-cartro").style.display = "none";
    document.getElementById("producto-bosses").style.display = "none";
    document.getElementById("producto-gots").style.display = "flex";
}
