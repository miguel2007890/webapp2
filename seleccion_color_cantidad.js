// Función para volver a la sección de productos desde la página de selección de producto
function volverAProductos() {
    // Redirigir a la sección de productos
    window.location.href = 'prueba.html#productos';
}

// Función para agregar el producto al carrito
function agregarAlCarrito() {
    // Código para agregar el producto al carrito
    alert("Producte agregat al carret!");
        const color = document.getElementById('color').value;
        const cantidad = document.getElementById('cantidad').value;
        const producto = { color, cantidad };

        // Obtener el carrito existente o crear uno nuevo
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // Añadir el nuevo producto
        carrito.push(producto);

        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Redirigir a la página del carrito
        window.location.href = 'prueba.html#carret';
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

document.addEventListener("DOMContentLoaded", function() {
    let productoSeleccionado = JSON.parse(localStorage.getItem("productoSeleccionado")).nombre;

    if (productoSeleccionado === "botella") {
        document.getElementById("producto-botella").style.display = "flex";
        document.getElementById("producto-cartro").style.display = "none";
        document.getElementById("producto-bosses").style.display = "none";
        document.getElementById("producto-gots").style.display = "none";
    } else if (productoSeleccionado === "cartro.reutilitzable") {
        document.getElementById("producto-botella").style.display = "none";
        document.getElementById("producto-cartro").style.display = "flex";
        document.getElementById("producto-bosses").style.display = "none";
        document.getElementById("producto-gots").style.display = "none";
    } else if (productoSeleccionado === "bosses.entrepa") {
        document.getElementById("producto-botella").style.display = "none";
        document.getElementById("producto-cartro").style.display = "none";
        document.getElementById("producto-bosses").style.display = "flex";
        document.getElementById("producto-gots").style.display = "none";
    } else if (productoSeleccionado === "gots.cafe") {
        document.getElementById("producto-botella").style.display = "none";
        document.getElementById("producto-cartro").style.display = "none";
        document.getElementById("producto-bosses").style.display = "none";
        document.getElementById("producto-gots").style.display = "flex";
    }
});
