import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('pruebas en 09 promesas',()=>{
    test('prueba de una funcion asincrona',(done)=>{

        const id = 1 ;
        getHeroeByIdAsync(id).then(hero =>{
           expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
           done();
        });
    });


    test('prueba de una funcion asincrona la excepcion',(done)=>{

        const id = 1000 ;
        getHeroeByIdAsync(id)
        .catch(error =>{
            expect(error).toBe('No se pudo encontrar el héroe: ' + id)
            done();
           
        });
    });
});