// SOLUCIÓN 2
const aCupones = [
    "WINTER_5",
    "AUTUMN_10",
    "SPRING_15",
    "SUMMER_20"
];

function calcularPrecioConCupon() {
    const precioProducto = document.getElementById("inputPrecioOriginal").value;
    const codigoCupon = document.getElementById("inputCodigoCupon").value;

    const areaResultado = document.getElementById("areaResultado");
    
    let descuento;

    if(!aCupones.includes(codigoCupon)) {
        alert(`El código de cupón "${codigoCupon}" no es válido.`);
    } else if (codigoCupon === "WINTER_5") {
        descuento = 5;
    } else if (codigoCupon === "AUTUMN_10") {
        descuento = 10;
    } else if (codigoCupon === "SPRING_15") {
        descuento = 15;
    } else if (codigoCupon === "SUMMER_20") {
        descuento = 20;
    }

    const precioFinal = (precioProducto * (100 - descuento)) / 100;

    areaResultado.innerHTML = `
<h2>El precio final con descuento del producto definido es:
    ${precioFinal}€.</h2>`;
}