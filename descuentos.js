// EJEMPLO 1
const precioOriginal = 100;
const porcentajeDescuento = 15;

const porcentajeAPagar = 100 - porcentajeDescuento;
const precioFinal = (precioOriginal * porcentajeAPagar) / 100;

console.log({ precioOriginal, porcentajeDescuento, porcentajeAPagar, precioFinal });



// EJEMPLO 2
const precioOriginal2 = 120;
const porcentajeDescuento2 = 18;

const porcentajeAPagar2 = 100 - porcentajeDescuento2;
const precioFinal2 = (precioOriginal2 * porcentajeAPagar2) / 100;

console.log({ precioOriginal2, porcentajeDescuento2, porcentajeAPagar2, precioFinal2 });



// CON FUNCIONES
function calcularPrecioConDescuento(precioOriginal, porcentajeDescuento) {
    const porcentajeAPagar = 100 - porcentajeDescuento;
    const precioFinal = (precioOriginal * porcentajeAPagar) / 100;

    const areaRespuesta = document.getElementById("divAreaRespuesta");

    
}

// EJEMPLO 1
const precioOriginal = 300;
const porcentajeDescuento = 30;

console.log(`El precio final de un producto de ${precioOriginal}€ con un descuento del ${porcentajeDescuento}% es de ${calcularPrecioConDescuento(precioOriginal, porcentajeDescuento)}`);


// EJEMPLO 2
const precioOriginal2 = 3000;
const porcentajeDescuento2 = 12;

console.log(`El precio final de un producto de ${precioOriginal2}€ con un descuento del ${porcentajeDescuento2}% es de ${calcularPrecioConDescuento(precioOriginal2, porcentajeDescuento2)}`);


function calcularPrecioConDescuentoHTML() {
    const precioOriginal = document.getElementById("inputPrecioOriginal").value;
    const porcentajeAPagar = document.getElementById("inputPorcentajeDescuento").value;

    const precioFinal = (precioOriginal * (100 - porcentajeAPagar)) / 100;

    const areaResultado = document.getElementById("areaResultado").innerHTML = `
<h2>El precio final con descuento del producto definido es:
    ${precioFinal}€.</h2>`;
}