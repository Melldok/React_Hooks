import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"


describe('Testing on useCounter', () => { 
    test('should return default values', () => { 
        
        // We use renderHook to actually render the component we want
        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;
        

        expect(counter).toBe(1);
        expect(decrement).toEqual( expect.any( Function ) );
        expect(increment).toEqual( expect.any( Function ) );
        expect(reset).toEqual( expect.any( Function ) );
       

     })


    test('should generate counter with value 100', () => { 
        const { result } = renderHook(() => useCounter(100));
        
        expect(result.current.counter).toBe(100);
      })

    test('should increment the value of counter', () => { 
        const { result } = renderHook(() => useCounter(100));
        const { counter, increment } = result.current;
        
        // If we want to test a function we have to use act in order to get that function running.
        act(() => {
            increment();
            increment(2)
        })


        expect( result.current.counter ).toBe(103)

       })

       test('should decrement the value of counter', () => { 
        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement } = result.current;
        
        
        act(() => {
            decrement(10);
          
        })

        expect( result.current.counter ).toBe(90)

       })

       test('should decrement the value of counter', () => { 
        const { result } = renderHook(() => useCounter(100));
        const { counter, increment, reset } = result.current;
        
      
        act(() => {
            
            increment(20)
            reset();
          
        })

        expect( result.current.counter ).toBe(100)

       })
 })