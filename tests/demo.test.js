describe('Pruebas <DemoComponent/>', ()=>{

    test('Esta prueba no debe de fallar', () =>{
        // 1 Inicializacion 
        const message1 = 'hola mundo'
        // 2 estimulo 
        const message12 = message1.trim()
        //3 Observar el comportamiento... Esperado
        expect( message1 ).toBe( message12) 
    });


});

