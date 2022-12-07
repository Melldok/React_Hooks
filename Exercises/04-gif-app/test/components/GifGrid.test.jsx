import { GifGrid } from "../../src/components/GifGrid";
import { render, screen} from '@testing-library/react'
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Tests on GifGrid component', () => { 

    const category = 'One Punch';

    test('should show "loading" initially', () => { 

        // With this mock we can return decoy values to pass our tests

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category}/>)

    

        expect(screen.getByText('Loading...'));
        expect(screen.getByText( category ));



     })

     test('should show items when images are loaded with useFetchGifs (Custom hook)', () => { 

       

        const gifs = [
            {
                id : 'ABC',
                title : ' Saitama',
                url: 'https://localhost/saitama.jpg'
            },

            {
                id : 'ABC',
                title : ' Goku',
                url: 'https://localhost/Goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        
        render(<GifGrid category={category}/>)
        screen.debug();
        expect( screen.getAllByRole('img').length).toBe(2)

      })

 })