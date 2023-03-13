import { getSaludo } from "../../src/base-testing/02-template-string";


describe('Test on template string', () => { 
    test('should return "Hello Fernando"', () => { 
        
        const name = 'Fernando';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`)

     })
 })