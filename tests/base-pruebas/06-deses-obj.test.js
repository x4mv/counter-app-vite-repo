import { DEFAULT_EXTENSIONS } from '@babel/core';
import {usContext} from '../../src/base-pruebas/06-deses-obj';


describe('Realizando pruebas en 06-deses-obj', () => { 
    test('usContext tiene que devolver un objeto', () => { 
        const datos = {
            clave: 'sergio',
            edad: 19,
        }
    
        const persona = { 
            nombreClave: datos.clave,
            anios: datos.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
    
        const usuario = usContext(datos);
    
        expect(persona).toEqual( usuario)
    })
});