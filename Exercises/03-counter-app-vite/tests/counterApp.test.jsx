import { screen, render, fireEvent } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"


describe('Counter App testing', () => { 

    const initialValue = 10

    test('should match snapshot', () => { 
        

        const {container} = render(<CounterApp value={initialValue}/>)
        expect(container).toMatchSnapshot();
        

     })

    test('should show initial value of 100', () => { 
        

        render(<CounterApp value={100}/>)
        expect(screen.getByText(100)).toBeTruthy()
        
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100')

     });

     test('Should increment with increment button', () => { 
        
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('Increment'));
        expect(screen.getByText('11')).toBeTruthy();

        
      })
     
      test('Should Decrement with Decrement button', () => { 
        
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('Decrement'));
        expect(screen.getByText('9')).toBeTruthy();

        
      })
      test('Should reset', () => { 
        
        render(<CounterApp value={355}/>);
        
        fireEvent.click(screen.getByText('Decrement'));
        fireEvent.click(screen.getByText('Decrement'));
        fireEvent.click(screen.getByText('Decrement'));
        //fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', {name:'btn-reset'}))
        
        expect(screen.getByText('355')).toBeTruthy();

        
      })
 })






