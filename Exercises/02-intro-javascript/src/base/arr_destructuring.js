



const characters = ['Robb', 'Eddard', 'John', 'Rickon'];

const [, , , p4 ] = characters; 



console.log(p4) 


const returnArray = () => {
    return ['ABC', 123];

};

const [ letters, numbers ] = returnArray();
console.log(letters, numbers);


const uState = ( value ) => {
    return [ value, ()=>{console.log('Hello world')}];

}

const [name, setName] = uState('Robb');

console.log(name)
setName()


