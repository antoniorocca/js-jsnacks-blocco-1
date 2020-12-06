// Creare un oggetto palla che abbia le seguenti
// proprietà. Nome = palla Peso = 10

var palla = {
    nome : 'palla',
    peso : 10
};

console.log(palla);

// Attraverso un prompt dare la possibilità 
// all’utente di modificare il peso della palla.

var nuovoPeso = Number(prompt('Quanto pesa una palla?'));
  
palla.peso = nuovoPeso;
  
console.log(palla);