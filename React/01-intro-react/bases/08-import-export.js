import {heroes, owners} from "../data/heroes";


const getHeroeById=(id)=>{
    return heroes.find((heroe)=>heroe.id===id);
}

const getHeroeByOwner=(owner)=>heroes.filter((heroe)=>heroe.owner === owner);

export{
    getHeroeById,
    getHeroeByOwner
}

