//desestructuracion
//asignacion desesctructurante

const persona={
    nombre:'Eliud',
    edad : 24,
    clave:'chulis',
};

const {nombre, edad, clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

//desestructuracion en funcion lambda
const retornaPersona =({clave,nombre,edad,rango = 'capitan'})=>{
    //console.log(nombre,clave,rango);

    return{
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:-12.2312312,
            lng:12.334434
        }
    }
}

const {nombreClave,anios,latlng:{lat,lng}} = retornaPersona(persona);
console.log(nombreClave,anios);
console.log(lat,lng);
