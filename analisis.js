// HELPERS
function esPar(numero) {
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(aNumeros) {
    const sumaNumeros = aNumeros.reduce(
        function(valorAnterior = 0, valorActual) {
            return valorAnterior + valorActual;
        }
    );

    const mediaAritmetica = sumaNumeros / aNumeros.length;

    return mediaAritmetica;
}

function calcularMediana(aNumeros) {
    const mitad = parseInt(aNumeros.length / 2);

    if (esPar(aNumeros.length)) {
        const valorElementoMitad1 = aNumeros[mitad - 1];
        const valorElementoMitad2 = aNumeros[mitad];

        const mediaAritmeticaElementosMitad = calcularMediaAritmetica([ valorElementoMitad1, valorElementoMitad2 ]);

        return mediaAritmeticaElementosMitad;
    } else {
        const valorElementoMitad = aNumeros[mitad];

        return valorElementoMitad;
    }
}



// CÁLCULADORA DE MEDIANAS
const aSalariosSpain = aInfoSpain.map(
    function(persona) {
        return persona.salario;
    }
);

//console.log("Array de salarios inicial:");
//console.log(aSalariosSpain);

const aSalariosSpainOrdenados = aSalariosSpain.sort(
    function(salarioAnterior, salarioActual) {
        return salarioAnterior - salarioActual;
    }
);

console.log("Array de salarios general en España (Ordenado):");
console.log(aSalariosSpainOrdenados);



// CÁCULO DE LA MEDIANA GENERAL
const medianaGeneralSpain = calcularMediana(aSalariosSpainOrdenados);

console.log("Mediana general de salarios en España:");
console.log(medianaGeneralSpain);


// CÁCULO DE LA MEDIANA DEL TOP 10% DE SUELDOS DE ESPAÑA
const puntoInicial = Math.round(aSalariosSpainOrdenados.length * 0.90); //El corte debe empezar en el 90%

const numElementosAExtraer = aSalariosSpainOrdenados.length - puntoInicial;

const aSalariosSpainTop10 = aSalariosSpainOrdenados.splice(puntoInicial, numElementosAExtraer);

console.log("Array de salarios del top 10% en España (Ordenado):");
console.log(aSalariosSpainTop10);

const medianaTop10Spain = calcularMediana(aSalariosSpainTop10);
console.log("Mediana del top 10% de salarios en España:");
console.log(medianaTop10Spain);


// EJEMPLO DE USO DE array.splice()
//const arrayEjemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//arrayExtraido = arrayEjemplo.splice(2, 2);

//console.log(arrayEjemplo);
//console.log(arrayExtraido);