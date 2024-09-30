//step 1 create new context
import { createContext, useState } from "react"

export type AuthUser = {
    name: string
    email: string
}

//step 2, create the component that provides the user context value
type UserContextProviderProp = {
    children: React.ReactNode
}

type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext<UserContextType | null >(null)

export const UserContextProvider = ({ children }: UserContextProviderProp ) => { 
    const [user, setUser] = useState<AuthUser | null>(null)


    return ( 
        <UserContext.Provider value={{ user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}