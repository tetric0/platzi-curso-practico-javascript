// Para calcular la cuota de amortización de una hipoteca en España se suele utilizar
// el sistema de amortización francés, que se caracteriza por ser un sistema de
// amortización de cuotas constantes.
// 
// Cómo las cuotas son constantes, cada mes el banco recibe los intereses en función
// del capital pendiente de amortizar. Por ello, durante los primeros años de la hipoteca,
// se paga una cantidad mayor de intereses que de capital y, durante el período final del
// préstamo, se paga más capital que intereses.
// 
// 
// ¿Cómo calculamos la cuota de amortización de la hipoteca?
// 
// La cuota constante de amortización de la hipoteca se calcula mediante la siguiente
// fórmula de actualización:
// 
// a = (1 - (1 + i)^^(-n) / i
// 
// Tenemos que dividir el importe del préstamo hipotecario entre esta fórmula, de modo
// que la fórmula para calcular la cuota hipotecaria se quedaría como sigue:
// 
// cuota = p / (((1 - (1 + i)^^-n))/ i)
// 
// Dónde:
// 
// P: importe del préstamo hipotecario.
// i: Tipo de interés anual/12. Se divide entre doce porque pagamos la cuota de la hipoteca
//                              mensualmente. Obviamente, si tenemos una hipoteca a tipo de
//                              interés variable este interés será distinto cada año, ó cada
//                              periodo en el cuál se revise el Euribor aplicable a la
//                              hipoteca, y habría que recalcular la cuota de amortización
//                              cada vez que cambie, pero no es el caso de estudio.
// 
// n: Número de periodos durante los cuales se paga el préstamo hipotecario, es decir, el
//    número de meses en el caso de estudio.

function convertirNumeroANegativo(numero) {
    return -1 * Math.abs(numero);
}

function calcularCuotaConstanteDeAmortizacion(i, n) {
    return (1 - Math.pow(1 + i, convertirNumeroANegativo(n))) / i;
}

function calcularCuotaHipotecaria() {
    let cuota;

    const precioInmueble = document.getElementById("inputPrecioInmueble").value;
    console.log("Precio del inmueble:");
    console.log(precioInmueble);

    const ahorroAportado = document.getElementById("inputAhorroAportado").value;
    console.log("Ahorro aportado:");
    console.log(ahorroAportado);

    const importeHipoteca = precioInmueble - ahorroAportado;
    console.log("Importe de la hipoteca:");
    console.log(importeHipoteca);

    const tipoInteresAnual = document.getElementById("inputInteres").value;
    console.log("Tipo de interés anual:");
    console.log(tipoInteresAnual);

    const tipoInteresAnualProrrateado = tipoInteresAnual / 12;
    console.log("Tipo de interés anual prorrateado (en meses):");
    console.log(tipoInteresAnualProrrateado);

    const plazoEnAnyos = document.getElementById("inputPlazo").value;
    console.log("Plazo en años:");
    console.log(plazoEnAnyos);

    const numeroPeriodos = plazoEnAnyos * 12;
    console.log("Número de periodos:");
    console.log(numeroPeriodos);

    const cuotaConstanteDeAmortizacion = calcularCuotaConstanteDeAmortizacion(tipoInteresAnualProrrateado, numeroPeriodos);
    console.log("Cuota constante de amortización:");
    console.log(cuotaConstanteDeAmortizacion);

    const cuotaHipotecaria = importeHipoteca / cuotaConstanteDeAmortizacion;
    console.log("Cuota de amortización:");
    console.log(cuotaHipotecaria);

    const cuadroResultado = document.getElementById("cuadroResultado");
    cuadroResultado.innerHTML = `
    <strong>La cuota anual fija es:</strong> ${Math.round(cuotaHipotecaria)}€
    <br /><strong>La cuota mensual fija es:</strong> ${Math.round(cuotaHipotecaria/12)}€
    <br /><strong>El cuadro de amotización mensual es:</strong>
    <br />`;
    cuadroResultado.style.backgroundColor = 'beige';
}