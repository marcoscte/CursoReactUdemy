import { getHeroeById, getHeroeByOwner } from "./08-import-export";

// const promesa  = new Promise((resolve, reject)=>{

//     setTimeout(()=>{
         
//         const heroe = getHeroeById(2);
//         resolve(heroe);

//         //reject('no se pudo econtrar el heroe');

        
//     }, 2000)

// });

// promesa.then( (heroe)=>{
//     console.log(heroe);
// }).catch(err => console.warn(err));

const getHeroeByIdAsync = (id)=>{
    return  new Promise((resolve, reject)=>{

        setTimeout(()=>{
             
            const heroe = getHeroeById(id);
            if(heroe!==undefined){
                resolve(heroe);
            }else{
                reject('no se pudo econtrar el heroe');
            }
            
    
            //
    
            
        }, 2000)
    
    });

}

getHeroeByIdAsync(21)
.then(console.log)
.catch(console.warn);

