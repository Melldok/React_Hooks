
const person = {
    name: "Harry",
    surname: "Potter",
    house: "Slytherin",
    adress: {
        city: "London",
        zip: 234234234,
        lat: 231421321,
        lng: 2312121321,
    }
}


// console.table( person )

// WRONG const person2 = person;

const person2 = {...person}; //Use spread operator when adding copies

person2.name = "Ron"


console.log(person, person2);