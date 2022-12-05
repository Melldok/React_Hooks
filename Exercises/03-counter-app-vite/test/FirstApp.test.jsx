import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";




describe('Testing on FirstApp component', () => { 

    //Make a photo of the component with the default properties and if something changes, the test will fail.
    // test('should match the snapshot', () => { 

    //     const title= 'Hello, I am Robb';
    //     const {container} = render(<FirstApp title={ title }></FirstApp>);

    //     //toMatchSnapshot will create a physical structure of what should be printed and will compare it to what is actually being rendered, if it differs, the test will fail. If we want to update the snapshot, we can do it pressing "U"
    //     expect(container).toMatchSnapshot();
        

    //  })

     test('should show title on a H1', () => { 

        const title= 'Hello, I am Robb';
        const {container, getByText, getByTestId} = render(<FirstApp title={ title }></FirstApp>);


        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title)

        expect(getByTestId('test-title').innerHTML).toContain(title)


      })


      test('should show subtitle sent by props', () => { 

        const title= 'Hello, I am Robb';
        const subtitle = 'I am a subtitle'

        const {getAllByText} = render(
            <FirstApp 
                
                title={ title }
                subtitle={ subtitle } 

            />
        );
            // If we happen to have more than one element matching our test, we have to use a testing different than "getbyText", such as (getAllByText), which will return an array of results, that's why we check for the length.
            expect( getAllByText(subtitle).length).toBe(2);

       })

 })