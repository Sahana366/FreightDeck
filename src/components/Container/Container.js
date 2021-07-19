import "./Container.scss";
import Vehicle from "./Vehicle/Vehicle";
import Shipment from "./Shipment/Shipment";

function Container() {
  return (
    <div>
    <div className="Deck-Container d-flex justify-content-between mb-0">
      <div className="Heading-Text w-50">
        <div>
          Vehicle Number
          <span className="Gray-Heading-Text">
            : HH H08764 (XYZ Express - 40221282)
          </span>
        </div>
      </div>
      <div className="Heading-Text w-50 ml-2">
        <div>
          Shipment Number.
          <span className="Gray-Heading-Text">: ( 5678528383 )</span>
        </div>
      </div>
    </div>
    <div className="Deck-Container d-flex justify-content-between mt-0">
      
          <Vehicle></Vehicle>
          <Shipment></Shipment>
    </div>
    </div>
  );
}

export default Container;
