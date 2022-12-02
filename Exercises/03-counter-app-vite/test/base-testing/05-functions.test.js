import { getUser, getUsuarioActivo } from "../../src/base-testing/05-funciones"




describe('Testing on 05-functions', () => { 
    test('getUser should return object', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        
        expect( testUser ).toStrictEqual( user )

        


     })

     test('getUsuarioActivo should return an object', () => {

        const name = 'Fernando';

        const user = getUsuarioActivo( name );

        expect( user ).toStrictEqual({
            uid: 'ABC567',
            username: name,
        })

     } )
 })