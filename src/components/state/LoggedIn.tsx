import { useState } from "react"


const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogIn = () => {
        setIsLoggedIn(true)
    }

    const handleLogOut = () => {
            setIsLoggedIn(false)
    }

  return (
    <div>
        <button onClick={handleLogIn}>Log In</button>
        <button onClick={handleLogOut}>Log Out</button>
        <div>{ isLoggedIn ? "User is Logged In" : "User is Logged Out"}</div>
    </div>
   
  )
}

export default LoggedIn