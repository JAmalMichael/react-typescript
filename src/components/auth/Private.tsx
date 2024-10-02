import  Login  from './Login'
import { ProfileProp } from './Profile'

type PrivateProp = {
    isLoggedIn: boolean
    Component: React.ComponentType<ProfileProp>
}


const Private = ({isLoggedIn, Component}: PrivateProp) => {
  if (isLoggedIn) {
        return <Component name='Jamal'  />
  } else {
    return <Login />
  }
}

export default Private