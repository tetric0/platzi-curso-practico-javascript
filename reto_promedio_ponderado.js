// PROMEDIO PONDERADO
// El promedio poderado es muy similar a la media aritmética. Este nos permite
// definir también el peso (importancia o relevancia) de cada elemento de la lista
// 
// Un caso de uso de la promedio ponderado es el cálculo de notas académicas
// cuando cada asignatura otorga diferentes “créditos”.
// 
// Para el ejemplo, definimos una constante que contendrá el expediente de un
// estudiante, con las asignaturas que ha completado, los créditos de cada
// asignatura y la nota final que obtuvo en ellas. El promedio será la nota
// media de su expediente.
const expedienteEstudiante1 = [
    {
        asignatura: "Cálculo",
        creditos: 6.5,
        notaFinal: 7.25
    },
    {
        asignatura: "Física",
        creditos: 7.5,
        notaFinal: 8.50
    },
    {
        asignatura: "Química",
        creditos: 6.5,
        notaFinal: 5.50
    },
    {
        asignatura: "Informática",
        creditos: 4.5,
        notaFinal: 6.20
    }
];

// Primero multiplicamos la nota final que el estuudiante ha obtenido en cada
// asignatura por el número de créditos de la asginatura.
// Usaremos el método de arrays map() para iterar por cada uno de los registros
// del expediente del estudiante.
// El método map() nos devuelve un array con el resultado de la funcion definida
// en su interior
const aNotasPonderadas = expedienteEstudiante1.map(
    function (registro) {
        return registro.notaFinal * registro.creditos;
    }
);

// A continuación sumaremos todos las notas ponderadas (aNotasPonderadas),
// mediante el método para arrays reduce().
const sumaNotasPonderadas = aNotasPonderadas.reduce(
    function(valorAnterior = 0, valorActual) {
        return valorAnterior + valorActual;
    }
);

// Luego sumamos los créditos de las asginaturas de todos los registros
const aCreditosAsignaturas = expedienteEstudiante1.map(
    function(registro) {
        return registro.creditos;
    }
);

const sumaCreditos = aCreditosAsignaturas.reduce(
    function(valorAnterior = 0, valorActual) {
        return valorAnterior + valorActual;
    }
);

// Por último, calculamnos el promedio ponderado dividiendo los dos valores
// calculados notaPoderada = (suma de las notas ponderadas del estudiante /suma de los creditos
// de las asignaturas del expediente)
const notaMediaExpediente = sumaNotasPonderadas / sumaCreditos;

console.log(`La nota media del expediente es: ${notaMediaExpediente}`);