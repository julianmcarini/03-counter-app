import { getHeroeById, getHeroesByOwner } from "../../bases/08-imp-exp";
import heroes, { owners } from "../../data/heroes";


describe('Pruebas en funciones de Heroes', () => {
    test('Debe retornar un Heroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    })

    test('Debe retornar undefined si el heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual(undefined);
    })    

    test('retorna un arreglo con los heroes de DC', () => {
        // const owner = [
        //     {
        //         id: 1,
        //         name: 'Batman',
        //         owner: 'DC'
        //     },
        //     {
        //         id: 3,
        //         name: 'Superman',
        //         owner: 'DC'
        //     },
        //     {
        //         id: 4,
        //         name: 'Flash',
        //         owner: 'DC'
        //     },
        // ];

        const owner = 'DC';
        const heroeData = heroes.filter(h => h.owner === owner);

        const heroesDC = getHeroesByOwner('DC');
        expect(heroesDC).toEqual(heroeData);

    });

    test('retorna un arreglo con los hereos de marvel', () => {
        const heroesMarvel = getHeroesByOwner('Marvel');
        expect(heroesMarvel.length).toBe(2);
    })
    
    
    
})
