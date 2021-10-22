// FUNCIONES PREVIAS

// CUADRADOS
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado ** 2;
}

// TRIÁNGULOS
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// CÍRCULOS
const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);

    return diametro * PI;
}

function areaCirculo(radio) {
    return PI * (radio **2);
}





// INTERACCIÓN CON EL HTML

// CUADRADOS
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputLadoCuadrado");
    const ladoCuadrado = input.value;

    alert(perimetroCuadrado(ladoCuadrado));
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputLadoCuadrado");
    const ladoCuadrado = input.value;

    alert(areaCuadrado(ladoCuadrado));
}

// TRIÁNGULOS
function calcularPerimetroTriangulo() {
    const lado1Triangulo = Number(document.getElementById("inputLado1Triangulo").value);
    const lado2Triangulo = Number(document.getElementById("inputLado1Triangulo").value);
    const baseTriangulo = Number(document.getElementById("inputBaseTriangulo").value);

    alert(perimetroTriangulo(lado1Triangulo, lado2Triangulo, baseTriangulo));
}

function calcularAreaTriangulo() {
    const baseTriangulo = Number(document.getElementById("inputBaseTriangulo").value);
    const alturaTriangulo = Number(document.getElementById("inputAlturaTriangulo").value);

    alert(areaTriangulo(baseTriangulo, alturaTriangulo));
}

// CÍRCULOS
function calcularPerimetroCirculo() {
    const radioCirculo = Number(document.getElementById("inputRadioCirculo").value);

    alert(perimetroCirculo(radioCirculo));
}

function calcularAreaCirculo() {
    const radioCirculo = Number(document.getElementById("inputRadioCirculo").value);

    alert(areaCirculo(radioCirculo));
}