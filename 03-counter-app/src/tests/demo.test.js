
describe('Pruebas en el archivo demo.test.js', () => {
    
    test( 'deben de ser iguales los string', () => {
    
        // 1. Inicialización
        const mensaje = 'Hola mundo'
    
        // 2. estímulo
        const mensaje2 = `Hola mundo`;
    
        // 3. obsevar el comportamiento
    
        expect( mensaje ).toBe( mensaje2 )
    })
})

