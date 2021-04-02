// desestructuraciòn
// asignaciòn Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

//const { nombre:nombre2 } = persona
const { edad, clave, nombre, } = persona



console.log( nombre )
console.log( edad )
console.log( clave )
/* console.log( persona.edad )
console.log( persona.clave )
 */

/* 
const retornaPersona = ( usuario ) => {
    //console.log(usuario)
    const { edad, clave, nombre, } = usuario
    console.log( edad, clave, nombre ); 
}  */
const retornaPersona = ( { nombre, edad, rango = 'Capitan'} ) => {
    
    //console.log( nombre, edad, rango ); 
    return {
        nombreClave: clave,
        anios: edad,
    }
} 


const avenger = retornaPersona( persona )


const useContext = ( { nombreClave, anios } ) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.2313,
        }
    }
} 
const { nombreClave, anios, latlng: {lat, lng} } =  useContext( persona  ) 

console.log(nombreClave, anios)
console.log( lat, lng)


