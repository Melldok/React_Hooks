import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/examples/MultipleCustomHooks"




describe('Testing on MultipleCustomHooks component', () => { 

    test('should show default component', () => { 

        render(<MultipleCustomHooks />)

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('Breaking Bad Quotes') );

        const nextButton = screen.getByRole('button', {name : 'Next Quote'})

        console.log(nextButton.disabled)
        expect( nextButton.disabled ).toBeTruthy();

        screen.debug()

     })
    
 })