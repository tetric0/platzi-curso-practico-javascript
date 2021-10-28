// SOLUCIÓN 1
const aCupones = [
    "WINTER_5",
    "AUTUMN_10",
    "SPRING_15",
    "SUMMER_20"
];

function calcularPrecioConCupon() {
    const precioProducto = document.getElementById("inputPrecioOriginal").value;
    const codigoCupon = document.getElementById("inputCodigoCupon").value;
    
    let descuento;

    switch(codigoCupon) {
        case aCupones[0]:
            descuento = 5;
            break;
        case aCupones[1]:
            descuento = 10;
            break;
        case aCupones[2]:
            descuento = 15;
            break;
        case aCupones[3]:
            descuento = 20;
            break;
        default:
            descuento = 0;
            break;
    }

    const precioFinal = (precioProducto * (100 - descuento)) / 100;

    const areaResultado = document.getElementById("areaResultado").innerHTML = `
<h2>El precio final con descuento del producto definido es:
    ${precioFinal}€.</h2>`;
}