import { getHeroesById } from './08-imp-ex'


/* const promesa =  new Promise( (resolve, reject) => {

    setTimeout( () =>  {
        //Tarea
        // importen el 
        const heroe = getHeroesById(2)
        console.log(heroe)  

        const p1 = getHeroesById(2)
        resolve( p1 )
        //reject( 'No se pudo encontrar el hèroe')
        //reject( p1 )
    }, 2000)

});


promesa.then( ( heroe ) =>  {
    console.log( heroe)
})
.catch( err =>  console.warn( err )); */


export const getHeroesByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
    setTimeout( () =>  {
            //Tarea
            // importen el 
            const heroe = getHeroesById( id )
            if( heroe === undefined){
                reject('El heroe no existe')
            }else{
                resolve( heroe )
            }
            //reject( 'No se pudo encontrar el hèroe')
            //reject( p1 )
        }, 1500)
    });

}

/* getHeroesByIdAsync(4)
    .then( console.log) // se envia el primer argumento a la función que hagamos
    .catch( console.warn )
    //.then( heroe => console.log('Heroe', heroe))
    //.catch( (err) => console.warn( err )) */