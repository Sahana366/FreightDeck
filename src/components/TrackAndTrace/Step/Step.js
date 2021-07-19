

function Step(props) {
  let style = "step";
  if (props.status === "current") {
    style = "step step-current";
  }
  if (props.status === "completed") {
    style = "step step-completed";
  }
  if (props.status === "incomplete") {
    style = "step step-incomplete";
  }

  return(
    <div className={style}>
      <span className="step-title"> {props.location} </span>
      <span className="step-description"> {props.time} </span>
    </div>
  )
}

export default Step;
