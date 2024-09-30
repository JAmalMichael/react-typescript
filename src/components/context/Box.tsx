import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"



const Box = () => {

    const theme = useContext(ThemeContext)
  return (
    <div
      style={{ background: theme.primary.main, color: theme.primary.main}}
    >Theme Context</div>
  )
}

export default Box