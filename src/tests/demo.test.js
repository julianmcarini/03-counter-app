


describe('Pruebas en el archivo demo.test.js', () => {
    
    test('debe de ser iguales los string', () => {
        
        //1. inicializacion
        const mensaje1 = 'Hola Mundo';
    
        //2. estimulo
        const mensaje2 = 'Hola Mundo';
    
        //3. observar el comportamiento
        expect(mensaje1).toBe(mensaje2);

    })

})



