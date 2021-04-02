import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import React from 'react';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');



describe('Pruebas con GifGrid component', () => {
    const category = 'Dragon ball z';
    
    test('Debería de mostrar <GifGrid /> correctamente', () => {
        

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });


        const wrapper = shallow( <GifGrid category={ category }/>);
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar items cuando se cargan imagines useFetchGifs', () => {
    
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title:'Cualquier cosa'
        },
    
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title:'Cualquier cosa'
        }
        ];
        

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false 
        });
        const wrapper = shallow( <GifGrid category={ category }/>);
    
        expect( wrapper ).toMatchSnapshot
        expect( wrapper.find('p').exists() ).toBe(false)
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )
    })
    
    


})