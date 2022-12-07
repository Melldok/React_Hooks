import { GifApp } from "../src/GifApp";
import { render,screen } from "@testing-library/react";


describe('Testing on GifApp', () => { 
    test('should ', () => { 

        render(<GifApp />);
        screen.debug();

     })
 })