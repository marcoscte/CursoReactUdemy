import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Prueba en 08 import export', ()=>{
    test('Esta prueba deberia regresar un heroe', ()=>{
        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });


    });

    test('Esta prueba deberia regresar undefined si no existe el ID', ()=>{
        const id = 33;
        const heroe = getHeroeById(id);

        expect(heroe).toBeFalsy();

        
    });

    //Tarea:
    //Debe retornar un arreglo con los heroes de DC
    //length === 3 
    //to equal al arreglo filtrado


    test('Esta prueba deberia regresar un arreglo con los 3 heroes de DC', ()=>{
        const heroesDC = getHeroesByOwner('DC');

        

        expect(heroesDC).toEqual(
        [{ id: 1, name: 'Batman', owner: 'DC' },
        { id: 3, name: 'Superman', owner: 'DC' },
        { id: 4, name: 'Flash', owner: 'DC' }]
        );

        
    });


    test('Esta prueba deberia regresar un arreglo con los 2 heroes de Marvel', ()=>{
        const heroesMarvel = getHeroesByOwner('Marvel');

        
        console.log(heroesMarvel);
        expect(heroesMarvel).toEqual(
            [{ id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }]
        );

        
    });
});