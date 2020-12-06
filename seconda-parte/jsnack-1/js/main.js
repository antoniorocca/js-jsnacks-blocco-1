// Crea 10 oggetti che rappresentano una zucchina,
// indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

var zucchine = [
    {
        varietà : 'zucchina1',
        peso : 2,
        lunghezza : 6
    },
    {
        varietà : 'zucchina2',
        peso : 4,
        lunghezza : 8
    },
    {
        varietà : 'zucchina3',
        peso : 6,
        lunghezza : 10
    },
    {
        varietà : 'zucchina4',
        peso : 8,
        lunghezza : 12
    },
    {
        varietà : 'zucchina5',
        peso : 10,
        lunghezza : 14
    },
    {
        varietà : 'zucchina6',
        peso : 12,
        lunghezza : 16
    },
    {
        varietà : 'zucchina7',
        peso : 14,
        lunghezza : 18
    },
    {
        varietà : 'zucchina8',
        peso : 16,
        lunghezza : 20
    },
    {
        varietà : 'zucchina9',
        peso : 18,
        lunghezza : 22
    },
    {
        varietà : 'zucchina10',
        peso : 20,
        lunghezza : 24
    },
]

var somma = 0
for (var i = 0; i < zucchine.length; i++) {
  var peso = zucchine[i].peso;
  somma = somma + peso;
}
console.log("Il peso di tutte le zucchine è di: " + somma + "kg");