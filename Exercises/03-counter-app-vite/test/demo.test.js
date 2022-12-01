

describe('Testing demo', () => { 
    
    test("This test shouldnt fail", () => {
        //Init
         const message1 = "Hello world"
     
        //Stimulus
     
        const message2 = message1.trim();
     
        //Observe
     
         expect( message1 ).toBe( message2 )
     })
 })


