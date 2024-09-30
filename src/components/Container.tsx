type ContainerProp = {
    style: React.CSSProperties
}


const Container = (props: ContainerProp) => {
  return (
    <div style={props.style}  >
        New Css container</div>
  )
}

export default Container