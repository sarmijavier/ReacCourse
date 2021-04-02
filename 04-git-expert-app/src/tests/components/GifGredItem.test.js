import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';


import { GifGridItem } from '../../components/GifGridItem';

const title = 'un titulo';
const url = 'https://localhost/algo.jpg';
const wrapper = shallow( <GifGridItem title={ title } url={ url } /> )


describe('Pruebas en <GifGridItem >', () => {

    test('Debería de mostrar <PrimeraApp /> correctament ', () => {
        

        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de tener un parráfo con el title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    })

    test('Debe de tener la imagen igual al urly alt de los props', () => {
        
        const img = wrapper.find('img');
        //console.log( img.html() )
        //console.log( img.props().src )
        expect( img.prop('src') ).toBe( url )

    })

    test('Debe de tener animate__fadeInLeftBig', () => {
        
        const div = wrapper.find('div')
        const className = div.prop('className')
        expect( className.includes('animate__fadeInLeftBig') ).toBe( true )
        //const cadena = (div.props().className).split(' ')
        //expect( cadena[2] ).toBe( 'animate__fadeInLeftBig' )

    })
    
    
    
})
 
