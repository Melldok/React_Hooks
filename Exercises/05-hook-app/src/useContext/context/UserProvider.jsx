
// We can create User Provider and Context on the same place or separated, whatever we prefer

import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: 'David',
//     email: 'david@email.com'
// }

//Children is optional. It would be, for example, all the routes from router. 
export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

  return (
    //<UserContext.Provider value={{ hola: 'Mundo', user: user}}>
    <UserContext.Provider value={{ user, setUser }}>
        {/* Here we defined the context provider, all the children of this component (UserProvider) will have the capacity to access the props. in this case, user and setUser */}
        { children }
    </UserContext.Provider>
  )
}
