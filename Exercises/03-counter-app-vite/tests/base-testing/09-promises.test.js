import { getHeroeByIdAsync } from "../../src/base-testing/09-promesas";


describe('testing on promises', () => { 
    
    test('should return hero', (done) => { 

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {

                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })

                done();
            })

     })
    test('should return error if heroe doesnt exist', (done) => { 

        const id = 100;
        
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy();
            })
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe')
               
                done()
            }) 

     })
 })