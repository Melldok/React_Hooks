import { render, screen } from "@testing-library/react";
import { GifCard } from "../../src/components/GifCard";




describe('Testing on GifCard Component', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitana.jpg'

    test('should match the snapshot', () => { 
        const { container } = render(<GifCard title={title} url={url}/>)
        expect(container).toMatchSnapshot();
     })

     test('should show the image with the URL and the ALT indicated', () => { 
        render(<GifCard title={title} url={url}/>)

        // expect(screen.getByRole('img').src).toBe( url );
        // expect(screen.getByRole('img').alt).toBe( alt );

        const { src,alt } = screen.getByRole('img');
        expect (src).toBe(url)
        expect (alt).toBe(alt)

        
      })

    test('should show title on the component', () => { 
        render(<GifCard title={title} url={url}/>)

        expect(screen.getByText(title)).toBeTruthy

     })
    

})  


