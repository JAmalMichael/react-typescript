// import Greet from "./components/Greet"
// import Status from "./components/Status"
// import Oscar from "./components/Oscar"

import Button from "./components/Button"

function App() {

  return (
    <>
      {/* <Status status="error"/>
      <Oscar>
        <h1>Oscar goes to Lionardo Dicarpio</h1>
      </Oscar> */}

      <Button handleClick={(event) => {
        console.log("Button was clicked", event)
      }} />
    </>
  )
}

export default App
