// funciones en js



/*
no se van a utilizar funciones
ya que se puede sobreescribir 
y traer algunos problemas entre
variables y funciones

function saludar( nombre ) {
    return `Hola, ${nombre}`
}


saludar = 30

//console.log( saludar('Goku'))


console.log( saludar )
*/

/* const saludar = function( nombre ) {
    return `Hola, ${nombre}`;
}
 */

const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola, ${nombre}`;
const saludar4 = () => `Hola, mundo`;

//console.log( saludar('Goku'))


console.log( saludar2('Goku') );
console.log( saludar3('Vegeta') );
console.log( saludar4() );


/* 
cuidado con esto, cuando
debemos utilizar return y cuando no


const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}
*/

// retorna un objeto
const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502',
});
console.log( getUser() )

/*
Tarea
1. Transformar a una función de flecha
2. Tiene que retornar un objeto implicito
3. Pruebas
function getUsuarioActivo( nombre ) {
    return {
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Javier')
console.log( usuarioActivo ) 
*/

const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Javier')
console.log( usuarioActivo ) 

const usuarioActivo2 = getUsuarioActivo('Fernando')
console.log( usuarioActivo2  ) 
