// Creare un oggetto che rappresenti un triangolo rettangolo,
// con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area.

var triangolo = {
    base : 10,
    altezza : 15
}

var baseTriangolo = triangolo.base;

var altezzaTriangolo = triangolo.altezza;

var ipotenusa = Math.sqrt((Math.pow(baseTriangolo, 2)) + (Math.pow(altezzaTriangolo, 2)));

var perimetro = (baseTriangolo + altezzaTriangolo + ipotenusa);

console.log("Il perimetro del triangolo è: " + perimetro.toFixed(0));

var area = ((baseTriangolo * altezzaTriangolo) /2);

console.log("L'area del triangolo è: " + area);