import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';


describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar Hola fernando', () => {
        
        const nombre = 'fernando';


        const saludo = getSaludo( nombre );

        expect( saludo ).toBe('Hola ' + nombre+'!' )


    })


    // getSaludo debe retornar Hola Carlos! si no hay argumento nombre
    test('getSaludo debe de retornar Hola Carlos si no se enviar argumento nombre', () => {
        
        const saludo = getSaludo()

        expect( saludo ).toBe('Hola Carlos!')
    })
    
        
})
