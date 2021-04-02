import { getHeroesById, getHeroesByOwner } from '../../base/08-imp-ex';
import heroes from '../../data/heroes';


describe('Pruebas en funciones de Héroes', () => {
    
    test('debe de retornar un héroe por id', () => {
        

        const id = 1;
        const heroe = getHeroesById( id );

        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toEqual( heroeData );
    })
    
    
    test('debe de retornar un undefined sí no existe el héroe', () => {
        

        const id = 7;
        const heroe = getHeroesById( id );

        expect( heroe ).toBe( undefined );
    })
    
    /* 
        Debe retornar un arreglo con los héroes  de DC
        owner
        toEqual al arreglo filter

        debe de retornar un arreglo con los héroes de Marvel
        length = 2   toBe
    */

    test('debe de retornar un arreglo con los heroes de DC', () => {
        
        const owner = 'DC';
        const heroesDc = getHeroesByOwner(owner);

        const heroesDataDc = heroes.filter(element => element.owner === owner);

        expect( heroesDc ).toEqual( heroesDataDc )


    })
    

    test('debe de retornar un arreglo con una longitud de 2, de los heroes de marvel ', () => {
        
        const owner = 'Marvel';
        const heroesDc = getHeroesByOwner(owner);

        const heroesDataDc = heroes.filter(element => element.owner === owner);
        
        expect( heroesDc.length ).toBe( heroesDataDc.length )


    })
    
})
