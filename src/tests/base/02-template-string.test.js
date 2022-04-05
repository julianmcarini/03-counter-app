import '@testing-library/jest-dom';
import {getSaludo} from '../../bases/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar hola fernando', () => {
        const nombre = 'Fernando';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);

    })
    // getSaludo debe de retornar Hola Carlos! si no hay argumentos en el nombre
    test('getSaludo debe retornar Hola Carlos!', () => {
        const saludo = getSaludo()
        expect(saludo).toBe('Hola Carlos!')      
    })
    

})

