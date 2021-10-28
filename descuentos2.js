function calcularPrecioConDescuentoHTML() {
    const precioOriginal = document.getElementById("inputPrecioOriginal").value;
    const porcentajeAPagar = document.getElementById("inputPorcentajeDescuento").value;

    const precioFinal = (precioOriginal * (100 - porcentajeAPagar)) / 100;

    const areaResultado = document.getElementById("areaResultado").innerHTML = `
<h2>El precio final con descuento del producto definido es:
    ${precioFinal}€.</h2>`;
}