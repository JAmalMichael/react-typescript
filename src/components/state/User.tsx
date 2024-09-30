import { useState } from "react"

type AuthUser = {
    name: string,
    email: string
}

const User = () => {

    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogIn = () => {
        setUser({
            name: 'Jamal',
            email: 'Jamal@example.com'
        })
    }

    const handleLogOut = () => {
        setUser(null);
    }
  return (
    <div>
        <button onClick={handleLogIn}></button>
        <button onClick={handleLogOut}></button>
        <div>This user is {user?.name}</div>
        <div>This users email is {user?.email}</div>
    </div>
  )
}

export default User