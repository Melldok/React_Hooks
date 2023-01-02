import React, { useCallback } from 'react'
import { Son } from './Son'
import { useState } from 'react';

export const Father = () => {

    const numbers = [2,4,6,8,10];
    const [value, setvalue] = useState(0);



    const increment = useCallback(
      (num) => {
            setvalue((oldValue) => oldValue + num )
       
      },
      [],
    )
    

    return (
        <div>
            <h1>Father</h1>
            <p> Total: { value } </p>

            <hr />

            {
                numbers.map( n => (
                    <Son 
                        key={ n }
                        number={ n }
                        increment={ increment }
                    />
                ))
            }
            {/* <Son /> */}
        </div>
    )
}
