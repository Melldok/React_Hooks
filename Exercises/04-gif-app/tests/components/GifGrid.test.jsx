import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//Mock completo del hook
jest.mock('../../src/hooks/useFetchGifs')

describe('Testing on GifGrid component', () => { 

    const category = 'One Punch';

    test('should show loading initially', () => { 
        //Mock cuando el hook viene vacio
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category}/>);
        
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
     })

     test('should show items when images are loaded with the custom hook useFetchgifs', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                utl: 'https://fake'
            },
            {
                id: '123',
                title: 'Goku',
                utl: 'https://fake'
            },
        ]

        //Mock cuando el hook viene cargado
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2)

      })
 })