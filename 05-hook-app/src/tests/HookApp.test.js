
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';


describe('Pruebas en <HookApp />', () => {
	let wrapper = shallow(<HookApp />)

	test('Debe mostrar <HookApp /> correctamente', () => {
		expect( wrapper ).toMatchSnapshot()
	})
	
})