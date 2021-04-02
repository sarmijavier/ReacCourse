
import { getImage } from '../../base/11-async-await';



describe('Pruebas async-await y fetch', () => {
    


    test('Debe de retornar el url de la imagen', async () => {
        
        const url = await getImage();

        expect( typeof url ).toBe( 'string' ); 
        // expect( url.includes('https://') ).toBe( true ); 
 

    })
    
})
