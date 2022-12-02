import { getHeroeByIdAsync } from "../../src/base-testing/09-promesas";




describe('Tests on promises', () => { 
    test('getHeroeByIdAsync should return hero', ( done ) => { 

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();

            })

     })

     test('Should return error if hero doesnt exist', ( done ) => { 

        const id = 100;
        getHeroeByIdAsync(id)
            .catch(error => {

                console.log(error)

                expect(error).toBe("No se pudo encontrar el héroe")

                done()
            });

     })
 })