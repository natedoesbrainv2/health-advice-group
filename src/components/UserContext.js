import {createContext, useState} from 'react'

export const UserContext = createContext({})

//Used to store user data while the account is logged in
export function UserContextProvider({children}) {
    const [userInfo, setUserInfo] = useState({})
    return(
        <UserContext.Provider value={{userInfo,setUserInfo}} >
            {children}
        </UserContext.Provider>
    )
} 
