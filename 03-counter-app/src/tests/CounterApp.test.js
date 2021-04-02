import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';
/* 
    1 Crear las siguientes pruebas para el <CounterApp />
    - debe mostrar <CounterApp /> correctamente (hacer match con un snapshot)
        y sus valores por defecto
    
    - Debe de mostrar el valor por defecto de 100
        Usar el wrapper.find, tomando el elemento html donde se muestra el valor del contador
 */

 describe('Pruebas en <CouterApp />', () => {
    let wrapper = shallow(<CounterApp value={ 10 }/>);

    beforeEach( ( ) => {
        wrapper = shallow(<CounterApp value={ 10 }/>);
    })
    test('Debe de mostar <CounterApp /> correctamente', () => {
        

        expect( wrapper ).toMatchSnapshot();


    })

    test('debe mostrar el value enviado por props', () => {
        
        const value = 100;
        const wrapper = shallow(
            <CounterApp value= { value }/>
        )

        const valueParrafo = wrapper.find('h2').text();

        expect( Number(valueParrafo) ).toBe( value );


    })
    
    
    test('Debe de incrementar con el boton +1', () => {
        

        const btn1 = wrapper.find('button').at(0).simulate('click');
        //btn1.html()

        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('11')



    })


    test('Debe de disminuir con el boton -1', () => {
        

        const btn1 = wrapper.find('button').at(2).simulate('click');
        //btn1.html()

        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('9')

    })


    test('Debe de resetear el valor con el boton reset', () => {
        
        const wrapper = shallow(<CounterApp value={ 105 }/>);

        const btn1 = wrapper.find('button').at(1).simulate('click');
        //btn1.html()

        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('105')

    })


 })
 