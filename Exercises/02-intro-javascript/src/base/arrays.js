
const array = [1,2,3,4]

// The spread operator is very useful whenever we want to add information from a previous element we created but dont want to mute it. The spread operator creates a COPY of the old item. If we use the ( = ) operator we will make a reference to the older item instead of creating a new one.

const array2 = [...array, 5, 6]

// Map is a method that iterates through each one of the elements of a given array and uses a callback function to make a new array.

const array3 = array2.map(element => element * 2 )
const array4 = array2.map(element => "What's up!")

 console.log(array)
 console.log(array2)
 console.log(array3)
console.log(array4)


