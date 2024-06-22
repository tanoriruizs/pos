var total = 0;

async function buscarProductos(event) {
    if (event.key === 'Enter') {
        var codigo = document.getElementById('codigo').value;
        await buscarProducto(codigo);
        document.getElementById('codigo').value = '';
    }
}

async function buscarProducto(codigo) {
    const url = 'http://localhost/apis/productos.php?codigo=' + codigo;
    await fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la petición');
            }
            return response.json();
        })
        .then(data => {
            agregarProducto(codigo, data.nombre_producto, data.precio);
        })
        .catch(error => {
            alert('Error 100: ' + error);
        });
}

function agregarProducto(codigo, nombre, precio) {
    var control = false;
    var tabla = document.getElementById('tbody1');
    var filas = tabla.getElementsByTagName('tr');

    for (var i = 0; i < filas.length; i++) {
        if (filas[i].cells[1].textContent === nombre) {
            control = true;
            incrementarCantidad(filas[i], parseFloat(precio));
            break;
        }
    }

    if (!control) {
        var fila = tabla.insertRow();
        fila.tabIndex = 0;
        fila.addEventListener('keydown', function(event) {
            if (event.key === 'Tab') {
                event.preventDefault();
                incrementarCantidad(fila, parseFloat(precio));
            }
        });

        var celda0 = fila.insertCell(0);
        celda0.innerHTML = "1";

        var celda1 = fila.insertCell(1);
        celda1.innerHTML = nombre;

        var celda2 = fila.insertCell(2);
        celda2.innerHTML = precio;

        var celda3 = fila.insertCell(3);
        var cantidad = 1;
        celda3.innerHTML = (precio * cantidad).toFixed(2);

        total += parseFloat(precio);
        document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    }
}

function incrementarCantidad(fila, precio) {
    var cantidadCelda = fila.cells[0];
    var totalCelda = fila.cells[3];
    var cantidad = parseInt(cantidadCelda.textContent) + 1;

    cantidadCelda.textContent = cantidad;
    var nuevoTotal = precio * cantidad;
    totalCelda.textContent = nuevoTotal.toFixed(2);

    total += precio;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function cerrarVenta() {
    document.getElementById('modal-total').textContent = `$${total.toFixed(2)}`;
    document.getElementById('modal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

function calcularCambio() {
    var montoRecibido = parseFloat(document.getElementById('monto-recibido').value);
    if (!isNaN(montoRecibido)) {
        var cambio = montoRecibido - total;
        document.getElementById('cambio').textContent = `$${cambio.toFixed(2)}`;
    } else {
        document.getElementById('cambio').textContent = '$0.00';
    }
}

function finalizarVenta() {
    limpiarTabla();
    cerrarModal();
}

function limpiarTabla() {
    document.getElementById('total').textContent = '$0.00';
    document.getElementById('tbody1').innerHTML = '';
    total = 0;
    document.getElementById('monto-recibido').value = '';
    document.getElementById('cambio').textContent = '$0.00';
}
