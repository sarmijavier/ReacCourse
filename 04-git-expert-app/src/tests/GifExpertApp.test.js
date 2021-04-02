import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";
import React from 'react';


describe('Pruebas en <GifExpertApp />', () => {
    
    test('Debe  mostrarse correctamente', () => {
        
        const wrapper = shallow( <GifExpertApp/> );
    
        expect( wrapper ).toMatchSnapshot();
    
    })
    
    
    test('debe de mostrar una lista de cartegorias', () => {
        const categories = ['One punch', 'Dragon ball'];        
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/> );
        

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
    
})

