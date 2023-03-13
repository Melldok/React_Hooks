import { render, screen } from "@testing-library/react"
import { GifApp } from "../src/GifApp"

describe('Testing on GifApp', () => { 
    test('should match snapshot', () => { 
        const {container} = render(<GifApp />)
        expect(container).toMatchSnapshot();

        
        screen.debug()
     })
 })