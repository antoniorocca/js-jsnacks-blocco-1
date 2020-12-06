// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine 
// che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano 
// i due gruppi di zucchine

var zucchinePiu15 = []; 
var zucchineMeno15 = []; 

function randomNumbers(min, max) {
  return Math.floor(Math.random() * max - min + 1) + min;
}

for (var i = 0; i < 10; i++) { 
  var tipo = randomNumbers(1, 10);
  var misura = randomNumbers(1, 20);
  var peso = randomNumbers(1, 20); 
  var zucchina = {
    tipo : 'zucchina-' + tipo,
    misura : misura,
    peso : peso
  }
  if (zucchina.misura > 15) { 
    zucchinePiu15.push(zucchina);
  } else {  
    zucchineMeno15.push(zucchina);
  }
}
console.log("Le zucchine che misurano più di 15cm sono:");
console.log(zucchinePiu15);
console.log("Le zucchine che misurano meno di 15cm sono:");
console.log(zucchineMeno15);

var somma1 = 0
for (var i = 0; i < zucchinePiu15.length; i++) {
  var peso = zucchinePiu15[i].peso;
  somma1 = somma1 + peso;
};
console.log("Il peso totale delle zucchine più lunghe di 15cm è di: " + somma1 + "kg");

var somma2 = 0
for (var i = 0; i < zucchineMeno15.length; i++) {
  var peso2 = zucchineMeno15[i].peso;
  somma2 = somma2 + peso2;
};
console.log("Il peso totale delle zucchine più corte di 15cm è di: " + somma2 + "kg");