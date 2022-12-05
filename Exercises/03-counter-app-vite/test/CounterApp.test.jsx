import { CounterApp } from "../src/CounterApp"
import { render, fireEvent, screen } from "@testing-library/react";


describe('Testing on countr app component', () => { 

    const initialValue = 0;

    test('should match the snapshot', () => { 
        const {container} = render( <CounterApp value={initialValue} />);
        expect( container ).toMatchSnapshot();

     })

    test('should show an initial value of 100', () => { 

        render( <CounterApp value={ 100 }/>)

        expect( screen.getByTestId("test-counter").innerHTML).toContain("100")


      })

      //////// CLICK TESTING ///////

    test('should increment with increment button', () => { 


        const {container} = render( <CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText( 'Increment' ))
        expect(screen.getByTestId('test-counter').innerHTML).toContain("1")


     })

     test('should decrement with decrement button', () => { 


        const {container} = render( <CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText( 'Decrement' ))
        screen.debug()
        expect(screen.getByTestId('test-counter').innerHTML).toContain("-1")


     })

     test('should reset the counter to 0', () => { 


        const {container} = render( <CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText( 'Increment' ))
        fireEvent.click(screen.getByText( 'Increment' ))
        fireEvent.click(screen.getByText( 'Increment' ))
        fireEvent.click(screen.getByText( 'Increment' ))
        fireEvent.click(screen.getByText( 'Decrement' ))
        fireEvent.click(screen.getByText( 'Decrement' ))
        fireEvent.click(screen.getByText( 'Decrement' ))
        fireEvent.click(screen.getByText( 'Reset' ))
        
        screen.debug()
        expect(screen.getByTestId('test-counter').innerHTML).toContain("0")


     })
    
 })