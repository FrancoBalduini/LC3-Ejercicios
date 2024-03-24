// EJERCICIO 4
/* 4. Estás a cargo de las velas de cumpleaños para el cumpleañero y decidiste que la
torta va a tener una vela por cada año de su edad total. Solo van a poder soplar las
velas más altas de la torta.
Tu objetivo es contar cuántas son las más altas de la torta
Ejemplo candles = [4, 4, 1, 3]
Las velas de mayor altura son de 4 de altura y son 2 en total. Por ende, la función
debe retornar 2 como valor.
*/

const candles = [9,9,9,9,5,6,4,3,3]

function candlesT(candles){

const maxCandles = Math.max(...candles);

const hCandles = candles.filter(can => can === maxCandles)

return hCandles.length
};

console.log(candlesT(candles));
