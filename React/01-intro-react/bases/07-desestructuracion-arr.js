

const personajes =['Naruto','Sasuke','Sakura'];
const [,,vegeta] = personajes;
console.log(vegeta);


const retornaArreglo=()=>{
    return ['ABC',123];
}

const [letras,numeros] = retornaArreglo();
console.log(letras,numeros);

const usaState = (valor) =>{
    return[valor,()=>(console.log('HolaMundo'))];
}

const [nombre, setNombre] = usaState('23');
console.log(nombre);
setNombre();


