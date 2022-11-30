

// Normal functions

function salute(name){
    return `Hey, ${name}, what's up`
}

console.log(salute('Robb'))

const salute2 = function(name){
    return `Hey, ${name}, what's up`
}

console.log(salute2('Robb'))


// Arrow functions 

const saluteArrow = name =>  `Hey, ${name}, what's up`

const saluteArrow2 = (name) =>  {
return`Hey, ${name}, what's up`
}

console.log(saluteArrow('Robb'))


const getActiveUser = (name) => (
    {
        userId: 'ABC567',
        username: name,
    })


const activeUser = getActiveUser('Eddard');
console.log( activeUser )