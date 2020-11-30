
const useOutput = (props)=>{
    return (
        <div>
            <p> This is the first sentence. author : {props.username} </p>
            <p> This is the second sentence </p>
            <button onClick={props.change}> Change Name </button>
        </div>
    )
}

export default useOutput