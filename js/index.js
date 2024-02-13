let nombreDeUsuario = prompt("Ingresa nombre de usuario");
let contrasena = prompt("ingresa tu contraseña");

if (nombreDeUsuario === "Nombre" && (contrasena === "123456" || contrasena === "000000")){
    console.log("Permitir acceso. Hola, bienvenido a Estilo Argentino.");
}else{
    console.log("Olvidaste la contraseña o no estas registrado");
}

const productos = [
    { nombre: 'Alfajor de chocolate', precio: 1000 },
    { nombre: 'Alfajor de maicena', precio: 1000 },
    { nombre: 'Tarta de Dulce de leche', precio: 1500 },
    { nombre: 'Chocotorta ', precio: 1500 },
    { nombre: ' Torta rogel ', precio: 1500 }
]

function mostrarProductos() {
    let mensaje = "Productos disponibles:\n";
    productos.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre}: $${producto.precio}\n`;
    });
    return mensaje;
}

function mostrarProductos() {
    let mensaje = "Productos disponibles:\n";
    productos.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre}: $${producto.precio}\n`;
    });
    return mensaje;
}

function simularCompra() {
    let carrito = {};
    let total = 0;

    while (true) {
        const seleccion = prompt(`${mostrarProductos()}\nIngrese el número del producto (o escriba "fin" para salir):`);

        if (seleccion.toLowerCase() === 'fin') {
            break;
        }

        const seleccionRealizada = parseInt(seleccion) - 1;

        if (!isNaN(seleccionRealizada) && seleccionRealizada >= 0 && seleccionRealizada < productos.length) {
            const cantidad = parseInt(prompt('Ingrese la cantidad de unidades que deseas:'));

            if (cantidad > 0) {
                const productoSeleccionado = productos[seleccionRealizada].nombre;
                carrito[productoSeleccionado] = cantidad;
                total += productos[seleccionRealizada].precio * cantidad;

                const continuarCompra = prompt('¿Desea continuar comprando? (si/no)');
                if (continuarCompra.toLowerCase() === 'no') {
                    break;
                }
            } else {
                alert('La cantidad ingresada no es válida. Intenta de nuevo.');
            }
        } else {
            alert('Número de producto no válido. Intenta de nuevo.');
        }
    }

    console.log('Resumen de tu compra:');
    for (const producto in carrito) {
        console.log(`${producto}: ${carrito[producto]} unidades`);
    }

    if (total > 0) {
        let descuentoAplicado = total;

    const medioDePago = prompt(`Seleccione el medio de pago:\n 1. Efectivo\n 2. Transferencia Bancaria (con descuento) o tarjeta de debito`);

        switch (medioDePago) {
            case '1':
                console.log(`Total a pagar en efectivo es: $${total}`);
                break;
            case '2':
                const conDescuento = prompt(`¿Pagas con transferencia bancaria (tienes un 10% de descuento) ?:(si/no)`);
                if (conDescuento.toLowerCase() === 'si') {
                    descuentoAplicado *= 0.9;
                    console.log('Se aplica un descuento del 10% por pagar con transferencia bancaria, acontinuacion dejamos datos de la cuenta.');
                } else {
                    console.log('¡Pagas con tarjeta de débito, te redireccionamos a la página de pago, gracias!.');
                }
                console.log(`Total a pagar es: $${descuentoAplicado}`);
                break;
        }
    } else {
        console.log('No se ha podido realizar la compra.');
    }
}

simularCompra();

const GRACIAS = `¡GRACIAS POR SU COMPRA, TE ESPERAMOS NUEVAMENTE!`;
alert(GRACIAS);
console.log(GRACIAS);




