import { getImagen } from "../../src/base-pruebas/11-async-await";

describe(' Pruebas 11-async-await', () => { 
    
    test('getImagen debe de retornar una url ', async () => { 

        const url = await getImagen();
        console.log(url)

        expect( typeof url).toBe('string');
    });
});