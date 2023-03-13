import { returnArray } from "../../src/base-testing/07-deses-arr"


describe('Test on Array destructuring', () => { 
    test('should return an array and a number', () => { 

        const [letters, numbers] = returnArray();
        
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(letters).toEqual(expect.any(String))


     })
 })