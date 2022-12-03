import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"




describe('Testing on FirstApp component', () => { 

    //Make a photo of the component with the default properties and if something changes, the test will fail.
    test('should match the snapshot', () => { 

        render(<FirstApp>
            
        </FirstApp>)


     })

 })