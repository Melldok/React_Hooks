import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"




describe('Testing on addCategory Component', () => { 
    
    
    test('should change the value of text box', () => { 
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');

        //Se simula el disparo de un evento tipo input con el valor Saitama
        fireEvent.input(input, {target: {value: 'Saitama'}})

        expect(input.value).toBe('Saitama');

        //screen.debug();

     })

     test('should call onNewCategory if input has a value', () => { 

        const inputValue = 'Saitama';
        //Esto es una funcion mock. Una simulacion de la funcion.
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe('')
        
        // Comprueba que la funcion fue llamada
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        //Comprueba que la funcion ha sido llamada con el valor indicado. 
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

      })

      test('shouldnt call onNewCategory if input is empty', () => { 
        
        const inputValue = '';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled()

       })
 })