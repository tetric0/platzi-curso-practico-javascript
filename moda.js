// CÁCULO DE LA MODA DE UNA LISTA DE NÚMEROS
const aNumeros = [ 1, 2, 1, 1, 3, 1, 2, 3, 4, 2, 2, 2, 1 ];
console.log(`aNumeros:
${aNumeros}
`);
// 
// oAparicionesPorNúmero = {
//     { 1: 3 },
//     { 2: 5 },
//     { 3: 2 },
//     { 4: 1 },
// }
const oAparicionesPorNumero = {};

aNumeros.map(function(elementoActual) {
    if(oAparicionesPorNumero[elementoActual]) {
        oAparicionesPorNumero[elementoActual] += 1; 
    } else {
        oAparicionesPorNumero[elementoActual] = 1; 
    }
});

console.log("oAparicionesPorNumero:");
console.log(oAparicionesPorNumero);

// Ahora hay que transformar el objeto conseguido en un array de arrays (cada atributo
// sera un array de tipo [ nombre, valor] ) mediante el método de objetos entries()
//
// aAparicionesPorNumero = [ [ 1: 3 ], [ 2: 5 ], [ 3: 2 ], [ 4: 1 ] ]

const aAparicionesPorNumero = Object.entries(oAparicionesPorNumero);

console.log(aAparicionesPorNumero);

// para, posteriormente aplicarle el método sort de los array a fin de
// ordenar los diferentes números que aparecian en el array inicial (el
// elemento [0] que aparece en cada uno de los subarrays) por el número de veces que
// aparecen en el array inicial (el elemento [1] que aparece en cada uno de los subarrays)
// 
// Para hacerlo utilizamos el método de objetos entries, que permite aplicar una función
// por cada atributo presente en el objeto. La función será de ordenación por el valor de
// cada atributo:

aAparicionesPorNumero.sort(
    function(elementoAnterior, elementoActual) {
        return elementoAnterior[1] - elementoActual[1];
    }
);

console.log(aAparicionesPorNumero);

// Ahora sólo queda devolver el número (primer elemento) del ultimo sub array del array
// ordenado. Esa será la moda
console.log(`${aAparicionesPorNumero[aAparicionesPorNumero.length - 1][0]}`);



// RETO: CON FUNCIONES
const aNumeros1 = [ 1, 2, 1, 1, 3, 1, 2, 3, 4, 2, 1, 2, 1 ];
const aNumeros2 = [ 3, 6, 5, 1, 1, 4, 6, 6, 2, 7, 6, 5, 4 ];

function calcularModa(lista) {
    const oAparicionesElemento = {};

    lista.map(function(elementoActual) {
        if(oAparicionesElemento[elementoActual]) {
            oAparicionesElemento[elementoActual] += 1; 
        } else {
            oAparicionesElemento[elementoActual] = 1; 
        }
    });

    const aAparicionesElemento = Object.entries(oAparicionesElemento);

    aAparicionesElemento.sort(
        function(elementoAnterior, elementoActual) {
            return elementoAnterior[1] - elementoActual[1];
        }
    );

    return aAparicionesElemento[aAparicionesElemento.length - 1][0];
}

console.log(`La moda de la lista de elementos ${aNumeros1} es ${calcularModa(aNumeros1)}`);
console.log(`La moda de la lista de elementos ${aNumeros2} es ${calcularModa(aNumeros2)}`);