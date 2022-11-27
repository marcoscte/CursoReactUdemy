import { string } from "prop-types";
import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-await', () => { 
    test('Debe retornar la url de la imagen', async() => { 

        const url = await getImagen();
        console.log(url);

        expect(typeof url).toBe('string');
         
     })
 })