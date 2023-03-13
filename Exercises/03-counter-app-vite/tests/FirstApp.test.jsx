import { getByTestId, render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Testing on first App', () => { 
    
    // test('should match with snapshot', () => { 
        
    //     const title = "Hello, I am Robb";
    //     const {container} = render(<FirstApp title={title}/>);

    //     expect(container).toMatchSnapshot()

    //  })

     test('should show title on a H1', () => { 
        const title = 'Hello, I am Robb';
        const {container, getByText, getByTestId} = render(<FirstApp title={title}/>);

        expect(getByText(title)).toBeTruthy();


        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toBe(title)

        expect(getByTestId('test-title').innerHTML).toBe(title)

      })

      test('should show subtitle sent by props', () => { 
        const title = 'Hello, I am Robb';
        const subtitle = 'I am a subtitle';
        const {getAllByText} = render(
        
        <FirstApp 
            title={title} 
            subtitle={subtitle}/>
            );

        expect(getAllByText(subtitle).length).toBe(2)

       })

    


 })