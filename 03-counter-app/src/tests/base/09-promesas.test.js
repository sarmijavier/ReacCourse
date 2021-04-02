import { getHeroesByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';





describe('Pruebas con promesas', () => {
    

    test('getHeroeByIdAsync debe de retornar un Héroe async', ( done ) => {
        
        const id = 1;
        getHeroesByIdAsync( id )
        .then( heroe => {

            expect( heroe ).toBe( heroes[0] )
            done()

        })


    })

    test('debe de obtener un error si el héroe por id no existe', ( done ) => {
        
        const id = 10;
        getHeroesByIdAsync( id )
            .catch( error => {
                expect( error ).toBe('El heroe no existe')
            
                done()
            })

    })
    
    
})
