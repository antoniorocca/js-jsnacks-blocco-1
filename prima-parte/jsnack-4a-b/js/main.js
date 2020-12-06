// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: 
// nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, 
// le altre saranno tutte settate a 0.

var squadreCalcio = [
    {
        nome : 'Milan',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : 'Juventus',
        puntiFatti : 0,
        falliSubiti : 0
    },
    { 
        nome : 'Napoli',
        puntiFatti : 0,
        falliSubiti : 0
    }
]

// Generare numeri random al posto degli 0 nelle proprietà:
// punti fatti e falli subiti

squadreCalcio.forEach(function(item) {
    item.puntiFatti = Math.floor(Math.random()*50);
    item.falliSubiti = Math.floor(Math.random()*50); 
});

console.log(squadreCalcio);