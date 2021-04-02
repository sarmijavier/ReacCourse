import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en el hook useFetchGifs', () => {
    
    test('debe de retornar el estado inicial', async () => {
    
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( 'One Punch' ) );
        const { data, loading } = result.current;
        
        //const {  data, loading } = useFetchGifs( 'One punch' );
        //console.log(data, loading)

        await waitForNextUpdate();
       
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);   

    })


    test('debe de retornar un arreglo de imgs y el loading en false', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
       
        await waitForNextUpdate();
       
        const { data, loading } = result.current;

        expect( data ).toBe( data.length );
        expect( loading ).toBe( false );   
        


    });
    
    



})
