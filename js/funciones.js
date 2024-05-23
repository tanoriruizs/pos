var total = 0;
var alerta;

const productos = [
    ["P001", "Manzana", 10.99],
    ["P002", "Banana", 15.49],
    ["P003", "Naranja", 7.99],
    ["P004", "Pera", 12.50],
    ["P005", "Uvas", 22.30],
    ["P006", "Melón", 18.00],
    ["P007", "Sandía", 9.75],
    ["P008", "Piña", 25.99],
    ["P009", "Mango", 30.00],
    ["P010", "Fresas", 5.49]
];

function buscarProductos(event) {
    if (event.key === 'Enter') {
        var codigo = document.getElementById('codigo').value;
        agregarProducto(codigo);
        document.getElementById('codigo').value = '';
    }
}

function agregarProducto(codigo) {
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
            break;
        }
    }
    if (!control) {
        alert('Producto no encontrado');
    }
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
