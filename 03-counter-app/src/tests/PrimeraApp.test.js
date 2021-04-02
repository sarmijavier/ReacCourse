import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';

import PrimeraApp from "../PrimeraApp";




describe('Pruebas en <PrimeraApp />', () => {
    
/*     test('Debe de mostrar el mensaje "Hola soy goku"', () => {
        

    
    const { getByText } = render( <PrimeraApp saludo={ saludo }/> )
    
        expect( getByText(saludo) ).toBeInTheDocument();
        
    }) */
    
    const saludo = 'Hola, soy Goku';
    
    
    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
        const wrapper = shallow( <PrimeraApp saludo={ saludo }/>)
    
        expect( wrapper ).toMatchSnapshot();
    
    })



    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, soy Goku';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow( 
        <PrimeraApp 
            saludo={ saludo }
            subtitulo={ subtitulo  }
        />)
    
        const textParrafo = wrapper.find('p').text();
        

        expect( textParrafo ).toBe( subtitulo );


    })
    
    
    
})
