// SOLUCIÓN 2
const cCupones = [
    { codigo: "WINTER_5", descuento: 5 },
    { codigo: "AUTUMN_10", descuento: 10 },
    { codigo: "SPRING_15", descuento: 15 },
    { codigo: "SUMMER_20", descuento: 20 }
];

function calcularPrecioConCupon() {
    const precioProducto = document.getElementById("inputPrecioOriginal").value;
    const codigoCupon = document.getElementById("inputCodigoCupon").value;

    const areaResultado = document.getElementById("areaResultado");

    const esCodigoCuponValido = function(cupon) {
        return cupon.codigo === codigoCupon;
    }

    const cuponUsuario = cCupones.find(esCodigoCuponValido);

    if(!cuponUsuario) {
        alert(`El código de cupón "${codigoCupon}" no es válido.`);
    } else {
        const descuento = cuponUsuario.descuento;
        const precioFinal = (precioProducto * (100 - descuento)) / 100;
        
        areaResultado.innerHTML = `
<h2>El precio final con descuento del producto definido es:
${precioFinal}€.</h2>`;
    }
}