import { render, screen } from "@testing-library/react"
import { GifCard } from "../../src/components/GifCard"




describe('Testing on GifCard', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'
    
    test('Should match snapshot', () => { 
        
        const {container} = render(<GifCard title={title} url={url} id="2"/>);
        expect(container).toMatchSnapshot();

     })

    test('Should show image with indicated URL and ALT', () => { 
        render(<GifCard title={title} url={url}/>)
        //screen.debug()
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)

        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url);
        expect(alt).toBe(title)

      })

      test('should show title on component', () => { 
        render(<GifCard title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy()

        
       })
 })