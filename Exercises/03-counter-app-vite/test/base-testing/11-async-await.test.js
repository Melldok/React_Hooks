import { getImagen } from "../../src/base-testing/11-async-await"



describe('Test on async await file', () => { 
    test('getImagen should return a URL from the image', async() => { 
        
        const url = await getImagen();

        console.log(url)
        expect(typeof url).toBe('string');
     })
 })