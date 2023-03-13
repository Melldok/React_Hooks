
describe('Tests on demo', () => { 
    test('This test should not fail', () => {
           // 1. Inicializacion
    const message1 = 'Hola mundo'
   
    const message2 = message1.trim()
    
    expect(message1).toBe(message2);
    })
 })
