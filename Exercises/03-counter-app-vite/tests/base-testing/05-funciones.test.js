import { getUser, getUsuarioActivo } from "../../src/base-testing/05-funciones"

describe('test on Functions', () => { 
    test('should return an object', () => { 
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(testUser).toStrictEqual(user);
    })

    test('GetUsuarioActivo Should return an object', () => { 
        
        const name = 'David';
        const activeUser = getUsuarioActivo(name);

        expect(activeUser).toStrictEqual({
            uid: 'ABC567',
            username: name
        })



     })
 })