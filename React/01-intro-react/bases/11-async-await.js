const getImagen = async()=>{

    try{
        const apiKey = 'QE4adyQWijxyMGMDJXEi6zeAcWi89uCr';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respuesta.json();
        const {url} =data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img);
    
    
        console.log(data);
    }catch(error){
        //manejo del error
    }
    
}

getImagen();



