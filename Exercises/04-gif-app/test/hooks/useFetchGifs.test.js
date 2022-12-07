import { useFetchGifs } from "../../src/hooks/useFetchGifs"
import {renderHook, waitFor} from '@testing-library/react'


describe('Testing on useFetchGifs Hook', () => { 
    test('should return initial state', () => { 
        
       const { result } =  renderHook( () => useFetchGifs('One Punch') )
       const { images, isLoading } = result.current;

       expect(images.length).toBe(0);
       expect( isLoading ).toBeTruthy();

     })

     test('should return an array of images and isLoading false', async() => { 
        
        const { result } =  renderHook( () => useFetchGifs('One Punch') )
        
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
        );

        const { images, isLoading } = result.current;
 
        expect(images.length).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
 
      })
 })