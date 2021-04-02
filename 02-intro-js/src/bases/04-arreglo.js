

// Arreglos en JS
// colleción de objetos

/*
no es común, pero se utiliza cuando queremos 
una posición fija Array(100)
const arreglo = new Array( 100 );
arreglo.push(1)
*/

const arreglo = [1,2,3,4]
/* 
No utilizar el push porque modifica el objeto principal
vamos a utilizar el operador spread ...
arreglo.push(1)
arreglo.push(2)
arreglo.push(3)
arreglo.push(4)

*/

let arreglo2 = [...arreglo,5];
//arreglo2.push( 5 );

//callback, crea un nuevo arreglo, no modifica el original
const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);