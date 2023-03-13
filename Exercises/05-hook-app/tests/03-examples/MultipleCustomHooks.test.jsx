import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/examples/MultipleCustomHooks"
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch"

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en MultipleCustomHooks', () => { 

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement 
    });


    beforeEach(() => {
        // Limpia cada una de las pruebas, por si la funcion se llama en mas de una prueba.
        jest.clearAllMocks();
    })
    
    test('Debe mostrar el componente por defecto', () => { 
        
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />)
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking Bad Quotes'));

        const nextButton = screen.getByRole('button', {name : 'Next Quote'});
        
        expect(nextButton.disabled).toBeTruthy();

        //screen.debug()
     })

    test('Debe mostrar un Quote', () => { 

        useFetch.mockReturnValue({
            data: [{ author: 'Robb', quote: 'Hello World'}],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />)
        //screen.debug()
        const nextButton = screen.getByRole('button', {name : 'Next Quote'});
        expect(nextButton.disabled).toBeFalsy()


     })

    test('Debe llamar la funcion de incrementar', () => { 

     

        useFetch.mockReturnValue({
            data: [{ author: 'Robb', quote: 'Hello World'}],
            isLoading: false,
            hasError: null
        });

     

        render(<MultipleCustomHooks />)
        const nextButton = screen.getByRole('button', {name : 'Next Quote'});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled()
        


     })
 })