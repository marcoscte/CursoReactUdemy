
export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}
const nombre ='Goku';
console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );