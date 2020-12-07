// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al
// massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra “a” e “b”

var numeri = [1, 2, 3, 4, 5, 6];
var primo = 2;
var secondo = 6;

function treArgomenti(array, a, b) {
    var nuovoArray = []; 
    for (var i = a - 1; i < b; i++) {
        nuovoArray.push(array[i]); 
    }
    return nuovoArray
}

console.log(treArgomenti(numeri, primo, secondo));