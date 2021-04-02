const personajes = ['Goku', 'Vegeta', 'Trunks'];

/* 
console.log( personajes[0] );
console.log( personajes[1] );
console.log( personajes[2] ); */

const [ , p2 ] = personajes;
// const [ ,,  p3 ] = personajes;
// const [ p1 ] = personajes;

// console.log( p2 )


export const retornarArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornarArreglo();


//Tarea
//  1. El primer valor del arr se llamará nombre
//  1. se llamará setNombre
const usState = ( valor ) => {
    return [valor, ()=> {console.log('Hola mundo')}]
}

const [nombre, setNombre] = usState( 'Goku' )
// console.log( nombre )
setNombre()
//arr[1]()