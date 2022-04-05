import { getHeroeByIdAsync } from "../../bases/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
    test('getHeroeByIdAsync debe retornar un heroe async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });
    });


    test('debe de obtener un error si el heroe por id existe', (done) => {
        const id = 10;
        // eslint-disable-next-line jest/valid-expect-in-promise
        getHeroeByIdAsync(id)
            .catch(error => {
                // eslint-disable-next-line jest/no-conditional-expect
                expect(error).toBe('No se pudo encontrar el héroe!!!');
                done();
            });
    });
    
    
})
