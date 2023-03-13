import { getByTestId, render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Testing on first App', () => { 
  
  const title = 'Hello, I am Robb'

  test('should match snapshot', () => { 
    const {container} = render(<FirstApp title={title}/>)
    expect(container).toMatchSnapshot();
   })

   test('should show message "Hello, I am Robb', () => { 
  
   render(<FirstApp title={title}/>);

   expect(screen.getByText(title)).toBeTruthy();

   
   //screen.debug();

    })

    test('should show title on an H1', () => { 
      render(<FirstApp title={title}/>);
      expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title)

     })

    
     test('should show subtitle sent by props', () => { 
        
      const subtitle = 'I am a subtitle'

      render(<FirstApp title={title} subtitle={subtitle}/>);

      expect(screen.getAllByText(subtitle).length).toBe(2)

     })


  

 })