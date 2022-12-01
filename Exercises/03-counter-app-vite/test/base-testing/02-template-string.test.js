
import { getSaludo } from '../../src/base-testing/02-template-string'

describe('Testing on 02-template-string', () => { 
    
        test('get saludo shouuld return "Hola Fernando"', () => {
           
            const name = "Fernando"
            const message = getSaludo(name)
          
            expect( message ).toBe( `Hola ${name}` )
        })
    
    
     })