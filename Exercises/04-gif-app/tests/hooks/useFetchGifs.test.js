import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"




describe('Testing on useFetchGifs hook', () => { 
    
    test('should return initial state', () => { 

        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
        
     })
    
     test('should return array of images and isLoading false', async() => { 

        const { result } = renderHook(() => useFetchGifs('One Punch'));
        
        await waitFor(
            // Espera a que esta condicion se cumpla ( Que sea mayor a 0)
            () => expect(result.current.images.length).toBeGreaterThan(0)
            
        )

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
        
     })
 })