

/* const getImagePromesa = () => {
    const promesa = new Promise((resolve, reject) => {
        resolve('https://aasdasdsadasdas')
    })
}
getImagePromesa().then( console.log ) */



export const getImage = async () => {

    try {
        const apiKey = 'kj1k146coNwxrLy5USOkt9XS974zG0r';
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await res.json()
    
        const { url } = data.images.original
        // console.log(data);
        /* const img = document.createElement('img')
        img.src = url
        document.body.appendChild( img )
     */
        return url;

    } catch (error) {
        // manejo del error
        return 'No existe';
    }

    
}

/*



const apiKey = 'kj1k146coNwxrLy5USOkt9XS974zG0r4';


const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);


peticion
    .then( res => res.json() )
    .then(  ({ data }) => {
       
        const { url } = data.images.original
        console.log(data);
        const img = document.createElement('img')
        img.src = url
        document.body.appendChild( img )
    })
    .catch( console.warn )
 */