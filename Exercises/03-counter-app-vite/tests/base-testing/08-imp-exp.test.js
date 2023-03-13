import { getHeroeById, getHeroesByOwner } from "../../src/base-testing/08-imp-exp";


describe('Testing on 08-imp-exp', () => { 
    test('getHereoById should return a Hero by id', () => { 

        const id = 1;
        const hero = getHeroeById(id);
        //console.log(hero)

        expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'});
     })
    
     test('getHeroeById Should return undefined if hero doesnt exist', () => { 

        const id = 100;
        const hero = getHeroeById(id);
        

        expect(hero).toBeFalsy()
     })
     test('getHeroesByOwner Should return filtered array', () => { 

        const dcArray = getHeroesByOwner('DC');
        const marvelArray = getHeroesByOwner('Marvel');

        expect(dcArray.length).toEqual(3)
        console.log(dcArray)
        
        expect(dcArray).toEqual(  [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])

        expect(marvelArray.length).toEqual(2)
        


       
     })
 })