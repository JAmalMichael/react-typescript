// import Greet from "./components/Greet"
// import Status from "./components/Status"
// import Oscar from "./components/Oscar"
// import Button from "./components/Button"
// import Container from "./components/Container"
// import { ThemeContextProvider } from "./components/context/ThemeContext"
// import Box from "./components/context/Box"
// import { UserContextProvider } from "./components/context/UserContext"
// import User from "./components/state/User"
// import RandomNumber from "./components/restriction/RandomNumber"
// import Toast from "./components/templateliterals/Toast"
// import Button from "./components/Button"
import Text from "./components/polymorphic/Text"




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
{/* 
        <UserContextProvider>
          <User />
        </UserContextProvider> */}

        {/* <RandomNumber  value={10} isPositive /> */}
        {/* <Toast position="center" /> */}
        {/* <Button variant="primary" onClick={() => console.log('Button Clicked')}>
          Anything 
          </Button> */}
          <Text as='h1' size='lg'>Heading</Text>
          <Text as='p' size='md'>Paragraph</Text>
          <Text as='label' size='sm' color='secondary'>Label</Text>
    </>
  )
}

export default App
