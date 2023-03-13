import { usContext } from "../../src/base-testing/06-deses-obj"

describe('Test on 06-Destructuring', () => { 
    test('should reuturn an object', () => { 

        const objeto = usContext(
            {
                clave: 'Fury',
                nombre: 'Nicholas',
                edad: 45,
                rango: 'General'
            }
        )

        expect(objeto).toStrictEqual(
            
            {"anios": 45, 
            "latlng": {"lat": 14.1232, "lng": -12.3232}, 
            "nombreClave": "Fury"}
        )

     



     })
 })