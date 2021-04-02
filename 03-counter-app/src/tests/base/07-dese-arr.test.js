const { retornarArreglo } = require("../../base/07-dese-arr")

describe('Pruebas en desestructuración', () => {
    
    test('Debe retornar un string y un número', () => {
        

        const [letras, numeros ] = retornarArreglo(); //['ABC', 123]

        // expect( arr ).toEqual(['ABC', 123])


        expect( letras ).toBe('ABC')

        expect( numeros ).toBe( 123 )

    })
    
})
