const apiKey = 'QE4adyQWijxyMGMDJXEi6zeAcWi89uCr';

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

httpCall.then(resp=> resp.json()) //promesa encadenada
.then(({data})=>{

    const {url} = data.images.original;
    
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
})
.catch(console.warn);