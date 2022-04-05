import { getImagen } from "../../bases/11-async-await"


describe('Prueba con async-await y Fetch', () => {
    test('Debe de retornar el url de la imagen', async () => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
    })
    
})
