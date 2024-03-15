const ErrorApiPage = (props) =>{
    const {error} = props
    return <h2 className="error-msg">{error.err.response.status} {error.err.response.data.msg}</h2>
}

export default ErrorApiPage