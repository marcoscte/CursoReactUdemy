const persona = {
    nombre : 'Eliud',
    apellido : 'Martinez',
    edad : 24,
    direccion:{ //objeto anidado
        calle : 'Lago Ginebra',
        numero:'199',
        zip:'11490',
        colonia:'pensil sur'
    }
};

const persona2={...persona}; // se copia el objeto en una nueva direccion de memoria.

persona2.nombre='Kimber';


console.log(persona);
console.log(persona2);