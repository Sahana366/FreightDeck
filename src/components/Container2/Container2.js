import "./Container2.scss";
import UrgentMessage from './UrgentMessage/UrgentMessage';
import Progress from "./Progress/Progress";
import Progress2 from "./Progress2/Progress2";

function Container2() {
  return (
    <div>
    <div className="Deck-Container d-flex justify-content-between mb-0">
      <div className="Heading-Text w-41">
        <div>
          Progress ( Status of Dispatched)
        </div>
      </div>
      <div className="Heading-Text ml-2 w-40">
        <div>
          Number of Loading Units per Day
        </div>
      </div>
      <div className="Heading-Text ml-2 w-19">
        <div>
          Urgent Messages
        </div>
      </div>
    </div>
    <div className="Deck-Container d-flex justify-content-between mt-0">
      
          <Progress2></Progress2>
          <Progress></Progress>
          <UrgentMessage></UrgentMessage>
    </div>
    </div>
  );
}

export default Container2;
