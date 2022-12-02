import { string } from "prop-types";
import { retornaArreglo } from "../../src/base-testing/07-deses-arr"


describe('Testing on destructuring', () => { 
    test('should return a string and a number', () => { 

        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe( 'ABC');
        expect(numbers).toBe( 123 );


        console.log(typeof letters)


        expect(typeof letters).toBe('string')


        

     })
 })