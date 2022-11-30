

// const apiKey = 'idEwz5VVLc2dnOEPO253bmbPIQ4a0Xtq'

// const petition = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)


// petition
//     .then( resp => resp.json() )
//     .then( ({data}) => {
//         const {url} = data.images.original
        
//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append( img )
//     })
//     .catch(console.warn)



const getImage = async() => {
    try{
        const apiKey = 'idEwz5VVLc2dnOEPO253bmbPIQ4a0Xtq';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await response.json();
        const { url } = data.images.original;
         
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    }catch(error){
        console.error(error)
    }


}

getImage();