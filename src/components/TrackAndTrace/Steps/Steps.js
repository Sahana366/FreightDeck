import Step from "../Step/Step";
import React from 'react';

function Steps(props)  {
    return(
      <div className="step-list">
      {props.stepsDetail.map((step,index)=> {
        let status="";
        if(index<props.completedSteps){
          status="completed"
        }
        if(index>props.completedSteps){
          status="incomplete"
        }
        if(index===props.completedSteps){
          status="current"
        }   
        return <Step status={status} location={step.location} time={step.time}/>
      })}
    </div>
      )
  }
  
  export default Steps;
  


