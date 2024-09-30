import { UserContext } from "./UserContext"
import { useContext } from "react"



const User = () => {
    const userContext = useContext(UserContext)

    const handleLogIn = () => {
        if(userContext){
            userContext.setUser({
                name: 'Jamal',
                email: "Jamal@example.org"
            })
        }
    }
    const handleLogOut = () => {
        if(userContext){
            userContext.setUser(null)
        }
    }
  return (
    <>
    <button onClick={handleLogIn}>Log In</button>
    <button onClick={handleLogOut}>Log Out</button>
    <div>User's name is {userContext?.user?.name}</div>
    <div>User' email is {userContext?.user?.email}</div>
    </>
  )
}

export default User