import { act, render, renderHook, screen } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";


describe('Pruebas en useForm', () => { 
    
    const initialForm = {
        name: 'Robb',
        email: 'Robb@google.com'
    }
    
    test('Debe retornar los valores por defecto', () => { 
        
        const {result} = renderHook(() => useForm(initialForm));
        console.log(result.current)
        
        expect(result.current).toEqual({
            
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)

        });

     })

     test('Debe cambiar el nombre del formulario', () => { 
        const newValue = 'Joana'

        const {result} = renderHook(() => useForm(initialForm));
        const {onInputChange} = result.current

        act(() => {
            onInputChange({target : {name : 'name', value: newValue}})
        })

        expect(result.current.name).toBe('Joana')
        expect(result.current.formState.name).toBe('Joana')


      })

     test('Debe resetear el formulario', () => { 
        const newValue = 'Joana'

        const {result} = renderHook(() => useForm(initialForm));
        const {onResetForm} = result.current

        act(() => {
            onResetForm()
        })

       
        expect(result.current.formState).toBe(initialForm)


      })


 })