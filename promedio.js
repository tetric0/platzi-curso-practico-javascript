const aElementos1 = [
    100,
    200,
    300,
    500
];

let sumaElementos = 0;

for (let i =0; i < aElementos1.length; i++) {
    sumaElementos += aElementos1[i];
}

const promedio1 = sumaElementos / aElementos1.length;

console.log(`El promedio de los números ${aElementos1} es ${promedio1}`);


// CON FUNCIONES
const aElementos2 = [
    800,
    200,
    300,
    500,
    750
];

function calcularMediaAritmetica(aElementos) {
    let sumaElementos = 0;

    for (let i =0; i < aElementos.length; i++) {
        sumaElementos += aElementos[i];
    }

    return sumaElementos / aElementos.length;
}

console.log(`La media aritmética de los elementos ${aElementos2} es ${calcularMediaAritmetica(aElementos2)}`);




// Alternativa al bucle for para iterar Arrays, acululando operaciones entre los elementos
const aElementos3 = [
    805,
    200,
    230,
    500,
    720
];

function calcularMediaAritmetica(aElementos) {
    const sumaElementos = aElementos.reduce(
        function (valorAcumulado = 0, elementoActual) {
            return valorAcumulado + elementoActual;
        }
    );
    return sumaElementos / aElementos.length;
}

console.log(`La media aritmética de los elementos ${aElementos3} es ${calcularMediaAritmetica(aElementos3)}`);