//Funcionaes

function saludar(nombre){
    return `Hola, ${nombre}`;
}

console.log(saludar('Eliud'));

const saludar2=(nombre)=>{
    return `Hola, ${nombre}`;           //funcion lambda
}

console.log(saludar2('Eliud'));


const saludar3 = (nombre)=> `Hola, ${nombre}`;  //lambda simplificada cuando solo hay una linea
console.log(saludar3('Naruto'));


const getUser =() =>({
        uid:'abcd124',
        username:'enelradiouncochinero'
    });

console.log(getUser());

    



function getActiveUser(nombre){
    return{
        uid:'00001',
        username:nombre
    }
};

const usuarioActivo = getActiveUser('Goku');
console.log(usuarioActivo);


//tarea transformar a funcion de flecha
//debe retornar un objeto implicito


const usuarioAct =(nombre)=>({uid:'1221212AAA',username:nombre});

console.log(usuarioAct('yisus'));



