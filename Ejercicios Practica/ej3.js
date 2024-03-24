// EJERCICIO 3
/* 3. Dado un arreglo de objetos de países que poseen dos propiedades: name y
population, ordenarlos de mayor a menor en cuanto a su población utilizando la
función de arreglo sort().
Ejemplo de un objeto del arreglo: { name: Argentina, population: 458100000}
*/

const countries = [
    { name: "Argentina", population: 4581000},
    { name: "Brasil", population: 217637297},
    { name: "France", population: 64847428},
    { name: "Usa", population: 341312871},
    { name: "Denmark", population: 600000},
];
    
const orderArray = countries.sort((a,b) => b.population - a.population);
console.log(orderArray);