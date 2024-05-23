var total = 0;

function buscarProductos(event) {
    if (event.key === 'Enter') {
        var codigo = document.getElementById('codigo').value;
        var control = false;
        for (var i = 0; i < productos.length; i++) {
            if (productos[i][0] == codigo) {
                var tabla = document.getElementById('tbody1');
                var fila = tabla.insertRow();
                var celda0 = fila.insertCell(0);
                celda0.innerHTML = "1";
                var celda1 = fila.insertCell(1);
                celda1.innerHTML = productos[i][1];
                var celda2 = fila.insertCell(2);
                celda2.innerHTML = productos[i][2];
                var celda3 = fila.insertCell(3);
                celda3.innerHTML = productos[i][2];
                total += parseFloat(productos[i][2]);
                document.getElementById('total').textContent = `$${total.toFixed(2)}`;
                control = true;
                document.getElementById('codigo').value = '';
                break;
            }
        }
        if (!control) {
            alert('Producto no encontrado');
        }
    }
}

function procesarPago(event) {
    if (event.key === 'Enter') {
        var montoRecibido = parseFloat(document.getElementById('monto-recibido').value);
        if (isNaN(montoRecibido)) {
            alert('Ingrese un monto válido');
            return;
        }
        var cambio = montoRecibido - total;
        cambio = parseFloat(cambio.toFixed(2));
        mostrarAlerta(`Cambio: $${cambio.toFixed(2)}`);
        total = 0;
        document.getElementById('monto-recibido').value = '';
    }
}

function mostrarAlerta(mensaje) {
    alerta = document.createElement('div');
    alerta.textContent = mensaje;
    alerta.style.position = 'fixed';
    alerta.style.top = '50%';
    alerta.style.left = '50%';
    alerta.style.transform = 'translate(-50%, -50%)';
    alerta.style.backgroundColor = 'white';
    alerta.style.border = '2px solid black';
    alerta.style.padding = '20px';
    alerta.style.borderRadius = '10px';
    document.body.appendChild(alerta);
}
function finalizarVenta() {
    limpiarTabla();
    if (alerta) {
        document.body.removeChild(alerta);
    }
}

function limpiarTabla() {
    document.getElementById('total').textContent = '$0.00';
    document.getElementById('tbody1').innerHTML = '';
}

function mostrarAlerta(mensaje) {
    alerta = document.createElement('div');
    alerta.textContent = mensaje;
    alerta.classList.add('alerta-cambio');
    document.body.appendChild(alerta);
}

