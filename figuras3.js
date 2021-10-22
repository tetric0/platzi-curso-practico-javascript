// Código del cuadrado
console.group("Cuadrados");

const ladoCuadrado1 = 3;
const ladoCuadrado2 = 5;

function perimetroCuadrado(lado) {
    return lado * 4;
}
console.log(`El perímetro de un cuadrado de lado ${ladoCuadrado1} es: ${perimetroCuadrado(ladoCuadrado1)}cm`);
console.log(`El perímetro de un cuadrado de lado ${ladoCuadrado2} es: ${perimetroCuadrado(ladoCuadrado2)}cm`);

function areaCuadrado(lado) {
    return lado ** 2;
}
console.log(`El área de un cuadrado de lado ${ladoCuadrado1} es: ${areaCuadrado(ladoCuadrado1)}cm²`);
console.log(`El área de un cuadrado de lado ${ladoCuadrado2} es: ${areaCuadrado(ladoCuadrado2)}cm²`);

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// Triángulo 1
const lado1Triangulo1 = 6;
const lado2Triangulo1 = 6;
const baseTriangulo1 = 4;
const alturaTriangulo1 = 5.5;

// Triángulo 2
const lado1Triangulo2 = 3;
const lado2Triangulo2 = 3;
const baseTriangulo2 = 6;
const alturaTriangulo2 = 6.7082039325;

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
console.log(`El perímetro de un triángulo con lados de ${lado1Triangulo1}cm, ${lado2Triangulo1}cm y ${baseTriangulo1}cm es: ${perimetroTriangulo(lado1Triangulo1, lado2Triangulo1, baseTriangulo1)} cm`);
console.log(`El perímetro de un triángulo con lados de ${lado1Triangulo2}cm, ${lado2Triangulo2}cm y ${baseTriangulo2}cm es: ${perimetroTriangulo(lado1Triangulo2, lado2Triangulo2, baseTriangulo2)} cm`);

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.log(`El área de un cuadrado de base ${baseTriangulo1}cm y altura ${alturaTriangulo1}cm es: ${areaTriangulo(baseTriangulo1, alturaTriangulo1)}cm²`);
console.log(`El área de un cuadrado de base ${baseTriangulo2}cm y altura ${alturaTriangulo2}cm es: ${areaTriangulo(baseTriangulo2, alturaTriangulo2)}cm²`);

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
const radioCirculo1 = 4;
const radioCirculo2 = 10;

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia (perímetro) del círculo
function perimetroCirculo(radio) {
    const diametroCirculo = radio * 2;

    return diametroCirculo * PI;
}
console.log(`la circunferencia de un círculo de radio ${radioCirculo1}cm (diametro = ${diametroCirculo(radioCirculo1)}cm) es: ${perimetroCirculo(radioCirculo1)}cm`);
console.log(`la circunferencia de un círculo de radio ${radioCirculo2}cm (diametro = ${diametroCirculo(radioCirculo2)}cm) es: ${perimetroCirculo(radioCirculo2)}cm`);

// Área del círculo
function areaCirculo(radio) {
    return PI * (radio**2);
}

console.log(`El área de un círculo de radio ${radioCirculo1}cm es: ${areaCirculo(radioCirculo1)}cm`);
console.log(`El área de un círculo de radio ${radioCirculo2}cm es: ${areaCirculo(radioCirculo2)}cm`);

console.groupEnd();