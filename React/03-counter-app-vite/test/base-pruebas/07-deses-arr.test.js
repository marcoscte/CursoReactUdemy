import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('pruebas en 07-des-arr', ()=>{
    test('debe retornar un string y un numero',()=>{
        const [letters,numbers] = retornaArreglo();

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');



    })
})