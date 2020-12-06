// Scrivi una funzione che accetti una stringa come
// argomento e la ritorni girata (es. Ciao -> oaiC)

var parola = prompt("Inserisci una parola");

function reverse(word){
    return word.split("").reverse().join("");
}

console.log(reverse(parola));