
// We can create User Provider and Context on the same place or separated, whatever we prefer

import { UserContext } from "./UserContext"

const user = {
    id: 123,
    name: 'David',
    email: 'david@email.com'
}

//Children is optional. It would be, for example, all the routes from router. 
export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'Mundo', user: user}}>
        { children }
    </UserContext.Provider>
  )
}
