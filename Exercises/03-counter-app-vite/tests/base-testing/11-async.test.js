import { getImagen } from "../../src/base-testing/11-async-await"

describe('testing on await async', () => { 
    test('getImagen should return an error if there is no image', async() => { 
        
        const resp = await getImagen();
        
        expect(resp).toBe('Image not found')

     })
 })