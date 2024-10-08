type StatusProps = {
    status: 'loading' | "success" | "error",
}


const Status = (props: StatusProps) => {

let message;
if (props.status === 'loading') {
    message = "Loading...";
}else if (props.status === 'success') {
    message = "Data fetched Successfully";
}else if (props.status === 'error') {
    message = "Error loading data";
}

  return (
    <div>Status - {message} </div>
  )

}

export default Status