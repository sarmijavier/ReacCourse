


const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5265453,
        lat: 45.33132,
        log: 31.6546556
    }
};


console.log( {persona} );
console.table( persona )
/*
Esto sirve para mirar el nombre de la variable,
pero se puede simplificar solo con la linea 11
console.log({
   persona:persona
})

*/

/* mismo espacio de memoria, CUIDADO falso positivo
const persona2 = persona
persona2.nombre = 'Peter'
*/
const persona2 = { ...persona}
persona2.nombre = 'Peter'
console.log(persona2)