// Un triángulo isósceles es un tipo de triángulo que tiene, al menos, dos lados de igual
// longitud.
// 
// Al ángulo formado por los lados de igual longitud se le denomina ángulo en el vértice y
// al lado opuesto a él, ángulo base
// 
// El teorema ded Pitágors dice que hipotenusa la hipotenusa es la raíz cuadrada de los dos catetos. En un t = cateto
function calcularAlturaTringuloIsosceles(lado1, lado2, base) {

    if (lado1 !== lado2) {
        console.log(`
---------------------------------------------------------------------------
¡ERROR!
El lado 1 del triángulo (${lado1}cm) no es igual al lado 2 (${lado2}cm).
En un triángulo isósceles esta condición debe cumplirse...
Prueba de nuevo.
---------------------------------------------------------------------------
`);
    } else {
        const cateto = (base / 2) ** 2;
        const hipotenusa = lado1;
        altura = Math.sqrt((hipotenusa ** 2) - (cateto ** 2));

        return altura;
    }
    return  base /2;
}