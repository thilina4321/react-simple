
const cockpit = (props)=> {
    return <button
    className={props.showPerson ? "red" : "green"}
    onClick={props.toggleShow}
  >
    {props.showPerson ? <p> Hide Person </p> : <p> show Person </p>}
  </button>
}

export default cockpit;