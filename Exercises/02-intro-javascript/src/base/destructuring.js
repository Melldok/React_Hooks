

// Destructuring 

const persona = {
    name: 'Tony',
    age: 45,
    code: 'IronMan',
    rank: 'Boss',
}

//Extracting properties ======

// const {name:name2, age, code} = persona
//console.log(name2);



// const returnPersona = ({name, age, rank = "Captain"} /*Print this property, if it doesnt exist, use this one. */ ) =>{
    
//     //console.log(`${name}, ${age}, ${rank}`)

    
// }
// returnPersona(persona)
const returnPersona = ({name, code, age, rank}  ) =>{
    
   return{
    codeName: code,
    age: age,
    latlng: {
        lat: 14.1313,
        lng: 12.2323
    }
   }

    
}


const { codeName, age, latlng:{ lat,lng }} = returnPersona(persona);

console.log(codeName, age);
console.log(lat,lng);
