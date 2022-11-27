//Arreglos

//const arreglo = new Array(100); crea un arreglo de 100 posiciones con elentos vacios dentro. Solo se recomienda para arreglos predefinidos.
const arreglo = [1,2,3,4];

let arreglo2 = [...arreglo,5]; // ... operador spread


const arreglo3= arreglo2.map(function(numero){ // funcion callback
    return numero * 2;
});



console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

