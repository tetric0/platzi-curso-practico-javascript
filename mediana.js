// MEDIANA PARA LISTAS DE NUMEROS IMPARES
let aNumerosImpar = [
    400000000,
    100,
    2500,
    200,
    500
];

console.log(`Lista de elementos inicial: ${aNumerosImpar}`);

// Primero ordenamos elos elementos del array de menor a mayor
aNumerosImpar.sort(function (a, b) {
    return a - b;
});

console.log(`Lista de elementos ordenada: ${aNumerosImpar}`);


const mitadArrayNumerosImpar = parseInt(aNumerosImpar.length / 2);

console.log(`Número de elemento central en el array: ${mitadArrayNumerosImpar} (${aNumerosImpar[mitadArrayNumerosImpar]})`);

const medianaArrayImpar = aNumerosImpar[mitadArrayNumerosImpar];

console.log(`La mediana de los números ${aNumerosImpar} es ${medianaArrayImpar}`);



// MEDIANA PARA LISTAS DE NUMEROS PARES
let aNumerosPar = [
    400000000,
    200,
    500,
    100,
    750,
    412
];

console.log(`Lista de elementos inicial: ${aNumerosPar}`);


// Primero ordenamos elos elementos del array de menor a mayor
aNumerosPar.sort(function(a, b) {
    return a - b;
});

console.log(`Lista de elementos ordenada: ${aNumerosPar}`);

const mitad1ArrayNumerosPar = parseInt(aNumerosPar.length / 2) - 1;
const mitad2ArrayNumerosPar = mitad1ArrayNumerosPar +1;

console.log(`Elementos centrales: ${mitad1ArrayNumerosPar} (${aNumerosPar[mitad1ArrayNumerosPar]}) y ${mitad2ArrayNumerosPar} (${aNumerosPar[mitad2ArrayNumerosPar]})`);

const medianaArrayPar = (aNumerosPar[mitad1ArrayNumerosPar] + aNumerosPar[mitad2ArrayNumerosPar]) / 2;

console.log(`La mediana de los números ${aNumerosPar} es ${medianaArrayPar}`);




// CON FUNCIONES
function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediana(aNumeros) {
    let mediana;

    // Primero ordenamos el array
    aNumeros.sort(function(a, b) {
        return a - b;
    });
console.log(aNumeros);
console.log(aNumeros.length % 2);

    // Si el número de elementos del array es par
    if(esPar(aNumeros.length)) {
        console.log("Array par");
        const mitad1ArrayNumerosPar = parseInt(aNumeros.length / 2) - 1;
        const mitad2ArrayNumerosPar = mitad1ArrayNumerosPar + 1;

        console.log(`Mitad 1: ${aNumeros[mitad1ArrayNumerosPar]}`);
        console.log(`Mitad 2: ${aNumeros[mitad2ArrayNumerosPar]}`);

        mediana = (aNumeros[mitad1ArrayNumerosPar] + aNumeros[mitad2ArrayNumerosPar]) / 2;

    // Si el número de elementos del array es impar
    } else {
        console.log("Array impar");
        const mitadArrayNumerosImpar = parseInt(aNumeros.length / 2);
        console.log(`Mitad: ${aNumeros[mitadArrayNumerosImpar]}`);

        mediana = aNumeros[mitadArrayNumerosImpar];
    }

    return mediana;
}

aNumerosImpar = [ 400000000, 100, 2500, 200, 500 ];
aNumerosPar = [ 400000000, 200, 500, 100 ];

console.log(`La mediana de los números ${aNumerosImpar} es ${calcularMediana(aNumerosImpar)}`);
console.log(`La mediana de los números ${aNumerosPar} es ${calcularMediana(aNumerosPar)}`);