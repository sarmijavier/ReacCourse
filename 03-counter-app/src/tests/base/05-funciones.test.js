
import '@testing-library/jest-dom'

import { getUser, getUsuarioActivo } from '../../base/05-funciones'




describe('Pruebas en 05-funciones', () => {

    test('getUser Debe de retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502',
        }

        const user = getUser();

        expect( user ).toEqual( userTest )
    
    })


    test('getUsuarioActivo debe retornar un objeto pero tiene el argumento nombre ', () => {
        
        const nombre = 'goku';
        const user = getUsuarioActivo(nombre);
        
        expect( user ).toEqual({
            uid: 'ABC567',
            username: nombre
        });
        
    })
    

    
})