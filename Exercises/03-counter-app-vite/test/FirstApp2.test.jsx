import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";




describe('Testing on FirstApp component', () => { 

    const title = 'Hey, I am Robb'
    const subtitle = 'I am a subtitle'
   
    test('should match the snapshot', () => { 
       
        

        const { container } = render ( <FirstApp title={ title } />)
        expect( container ).toMatchSnapshot();

     });
    
    test('should show message "Hi, I am Robb"', () => { 
        
        render ( <FirstApp title={ title } />)

        //Screen represents the whole component we are rendering.
        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('should show the title in the H1', () => { 

        render ( <FirstApp title={ title } />)
        expect( screen.getByRole('heading', {level : 1}).innerHTML).toContain(title);

     });

     test('should show subtitle sent by props', () => { 

        render ( 
        
        <FirstApp 
            
            title={ title }
            subtitle={ subtitle }
                
        />);
       
        expect( screen.getAllByText(subtitle).length).toBe(2);

      })


 })