

//Template Strings

const nombre='Eliud';
const apellido ='Martinez';
//Sin template String
const nombreCompleto = nombre + ' '+apellido;
console.log(nombreCompleto);

//Con templateString
const nombreCompl = `${nombre} ${apellido}`;
console.log(nombreCompl);

function getSaludo(nombre){
    return 'Hola Mundo '  + nombre;
}

console.log(`Este es un texto: ${getSaludo('Eliud')}`);
