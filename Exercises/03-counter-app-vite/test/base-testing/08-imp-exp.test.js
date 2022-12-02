import { getHeroeById, getHeroesByOwner } from "../../src/base-testing/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('testing on imp exp', () => { 
    test('getoHeroebyId should return heroe by ID', () => { 

        const id = 1;
        const hero = getHeroeById(id);

        //console.log(hero)

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

     })

     test('getoHeroebyId should return undefined if id doesnt exist', () => { 

        const id = 100;
        const hero = getHeroeById(id);

        //console.log(hero)

        //expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

        expect( hero ).toBeFalsy();

     })


    

     test('should return an array with all DC heroes, with length of 3 toEqual', () => { 

        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)
    
        expect( heroes.length ).toBe(3);
        expect( heroes ).toEqual(heroes.filter((heroe) => heroe.owner === owner))

    

      })


      test('should return an array with all DC heroes, with length of 2 toEqual', () => { 

        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)
    
        expect( heroes.length ).toBe(2);
        expect( heroes ).toEqual(heroes.filter((heroe) => heroe.owner === owner))

    

      })

   

    


     
     
 })