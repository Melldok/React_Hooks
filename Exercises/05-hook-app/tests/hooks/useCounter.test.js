const { renderHook, act } = require("@testing-library/react")
const { useCounter } = require("../../src/hooks/useCounter")



describe('Pruebas en useCounter', () => { 
    test('Debe retornar los datos por defecto', () => { 

        // Result es el resultado de renderizar el hook. se llama siempre asi
        const {result} = renderHook(() => useCounter());
        // Desestructuramos las props del propio hook del current result
        const {counter, decrement, increment, reset} = result.current;

        expect(counter).toBe(1);
        expect(decrement).toEqual(expect.any(Function))
        expect(increment).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))


     })

     test('Debe generar el counter con valor 100', () => { 
        
        const {result} = renderHook(() => useCounter(100));

        expect(result.current.counter).toBe(100);


      })

    
      test('Debe incrementar el contador', () => { 
        
        const {result} = renderHook(() => useCounter(100));
        const {increment, counter} = result.current;

        act(() => {
            increment();
            increment(2);
        })

        //expect(counter).toBe(101) Esta prueba dara un falso negativo, por eso necesitamos coger el valor actual actualizado
        expect(result.current.counter).toBe(103)


     })
    test('Debe decrementar el contador', () => { 
        
        const {result} = renderHook(() => useCounter(100));
        const {decrement, counter} = result.current;

        act(() => {
            decrement();
            decrement(2);
        })

        //expect(counter).toBe(101) Esta prueba dara un falso negativo, por eso necesitamos coger el valor actual actualizado
        expect(result.current.counter).toBe(97)


     })
    test('Debe resetear el contador', () => { 
        
        const {result} = renderHook(() => useCounter(100));
        const {decrement, counter, reset} = result.current;

        act(() => {
            decrement();
            decrement(2);
            reset()
        })

        //expect(counter).toBe(101) Esta prueba dara un falso negativo, por eso necesitamos coger el valor actual actualizado
        expect(result.current.counter).toBe(100)


     })
 })