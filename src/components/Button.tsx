type ButtonProp = {
    // handleClick: () => void    a void function 
    handleClick: (event:React.MouseEvent<HTMLButtonElement>) => void
}
const Button = (props: ButtonProp) => {
  return (
    <button onClick={props.handleClick}>Click</button>
  )
}

export default Button