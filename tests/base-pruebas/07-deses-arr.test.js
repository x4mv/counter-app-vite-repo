import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => { 

    test('debe retornar un string y un numero', () => { 
        const [letters, numbers] = retornaArreglo();


        expect( letters).toBe( 'ABC');
        expect( numbers).toBe( 123 );


        /*
        
        ----> evalua los tipos de datos 
        expect( typeof letters).toBe('String')
        
        ----> Evalua que sea un string, no necesariamente el mismo 
        expect( letters ).toEqual( expect.any(String))
        )
        */
    })

})