// Scrivi una funzione che fonda due array 
// (con lo stesso numero di elementi) prendendo 
// alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var numeri = [1, 2, 3, 4, 5];
var lettere = ['a', 'b', 'c', 'd', 'e'];

function fusione(array1, array2) {
  var arrayMix = [];
  for (var i = 0; i < array1.length && array2.length; i++) {
    arrayMix.push(array1[i]);
    arrayMix.push(array2[i]);
  } 
  return arrayMix;
}

console.log(fusione(numeri, lettere));