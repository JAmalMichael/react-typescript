// import Greet from "./components/Greet"
// import Status from "./components/Status"
// import Oscar from "./components/Oscar"
// import Button from "./components/Button"
// import Container from "./components/Container"
// import { ThemeContextProvider } from "./components/context/ThemeContext"
// import Box from "./components/context/Box"
import { UserContextProvider } from "./components/context/UserContext"
import User from "./components/state/User"



function App() {

  return (
    <>
      {/* <Status status="error"/>
      <Oscar>
        <h1>Oscar goes to Lionardo Dicarpio</h1>
      </Oscar>

      <Button handleClick={(event) => {
        console.log("Button was clicked", event)
      }} />
      <Container style={{border: '1px solid black', padding: '1rem'}}/> */}

        {/* <ThemeContextProvider>
          <Box />
        </ThemeContextProvider> */}

        <UserContextProvider>
          <User />
        </UserContextProvider>

    </>
  )
}

export default App
