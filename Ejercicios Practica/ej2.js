// EJERCICIO 2
/* 2. Crear un arreglo de nombres a partir del arreglo anterior pero solo para las
personas mayores de 20 años y menores de 29.
*/


let namesRandoms = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 40, city: "London" },
    { name: "Lisa", age: 36, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" },
];
    
const nFilt = namesRandoms.filter(filtName => filtName.age > 20 && filtName.age < 29 );
console.log(nFilt);