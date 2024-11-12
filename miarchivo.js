// Lista de productos
let productos = [];

// Función para agregar un producto
function agregarProducto() {
    const nombre = document.getElementById("nombreProducto").value;
    const precio = parseFloat(document.getElementById("precioProducto").value);
    
    if (nombre && !isNaN(precio) && precio > 0) {
        // Agregar el producto a la lista
        productos.push({ nombre, precio });
        
        // Actualizar la lista visual de productos
        actualizarListaProductos();
        
        // Calcular el costo total
        calcularCostoTotal();
        
        // Limpiar los campos de entrada
        document.getElementById("nombreProducto").value = '';
        document.getElementById("precioProducto").value = '';
    } else {
        alert("Por favor, ingresa un nombre válido y un precio mayor a 0.");
    }
}

// Función para actualizar la lista de productos en el HTML
function actualizarListaProductos() {
    const lista = document.getElementById("listaProductos");
    lista.innerHTML = '';
    
    productos.forEach((producto, index) => {
        const item = document.createElement("li");
        item.textContent = `${producto.nombre}: $${producto.precio.toFixed(2)}`;
        lista.appendChild(item);
    });
}

// Función para calcular el costo total de los productos
function calcularCostoTotal() {
    const costoTotal = productos.reduce((total, producto) => total + producto.precio, 0);
    document.getElementById("costoTotal").textContent = costoTotal.toFixed(2);
}
