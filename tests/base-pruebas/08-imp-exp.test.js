import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeById debe retornar un heroe por ID', () => { 
        const id = 1 ; 
        const hero = getHeroeById(id);
        

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' } )


    })


    test('getHeroeById debe retornar undefined si no exite el id', () => { 
        const id = 100 ; 
        const hero = getHeroeById(id);
        
        // se cumple si es null, undefined o false
        expect( hero ).toBeFalsy();

        
    })

    // Tarea : 
    /* 
    Debe retornar un arreglo con los heroes de DC 
    length === 3
    toEqual al arreglo filtrado 

    debe retornar un arreglo con los heroes de marvel
    */

    test('getHeroeByOwner debe retornar los heroes por Owner', () => { 

        const own = 'DC'
        const own2 = 'Marvel'
        const heroes = getHeroesByOwner(own)
        const heroes2 = getHeroesByOwner(own2)
        

        expect( heroes.length ).toBe( 3 )
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === own ))
        expect( heroes2.length).toBe( 2 )
    });


});