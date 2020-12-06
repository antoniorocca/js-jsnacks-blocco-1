// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa 
// con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore.

var bici = [
  {
    nome : 'bici1',
    peso : 11
  }, 
  {
    nome : 'bici2',
    peso : 15
  }, 
  {
    nome : 'bici3',
    peso : 8
  }, 
  {
    nome : 'bici4',
    peso : 21
  }
]
  
var pesoMinore = bici[0];
for (var i = 0; i < bici.length; i++) {
    if (bici[i].peso < pesoMinore.peso) {
      pesoMinore = bici[i];
    } 
}
console.log(pesoMinore.nome + ' è la più leggera')