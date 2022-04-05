import {render} from '@testing-library/react';
import React from 'react';
import PrimeraApp from '../PrimeraApp';

describe('Prueba en <PrimeraApp/>', () => {
    test('debe mostrar el mensaje "Hola, soy Goky', () => {
        const saludo = 'Hola, soy Goku';
        const {getByText} = render(<PrimeraApp saludo = {saludo}/>);
        expect(getByText())

    });
    
})
