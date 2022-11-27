import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas 02',()=>{
    test('getSaludo debe retornar "Hola Goku"',()=>{
        const name = 'Goku';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
    })
});