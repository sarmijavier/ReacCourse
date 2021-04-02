import { getGifs } from "../../helpers/getGifs";



describe('Pruebas con getGifs Fetch', () => {
    test('debe traer 10 elementos', async () => {
        
        const data = await getGifs('Dragon ball');
        expect(data.length).toBe(10);

    })

    test('Debe traer nada', async () => {
        
        const gifs = await getGifs('');
        expect( gifs.length ).toBe( 0 )
    })
    
    
})