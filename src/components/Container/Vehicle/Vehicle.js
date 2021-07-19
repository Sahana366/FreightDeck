import "./Vehicle.scss";
import { MDBRow, MDBCol } from "mdbreact";

function Vehicle() {
  return (
      <div className="Truck-Card-two">
        <MDBRow>
          <MDBCol size="5" className="Card-Column">
            <div className="text-bold text-xm-gray">Truck ID</div>
            <div>02348382</div>
          </MDBCol>
          <MDBCol size="5" className="Card-Column">
            <div className="text-bold text-xm-gray">Driver Name</div>
            <div>Shivram</div>
          </MDBCol>
          <MDBCol size="5" className="Card-Column">
            <div className="text-bold text-xm-gray">Vehicle Number</div>
            <div>HH H08764</div>
          </MDBCol>
          <MDBCol size="5" className="Card-Column">
            <div className="text-bold text-xm-gray">Driver Number</div>
            <div>9087676455</div>
          </MDBCol>
          <MDBCol size="5" className="Card-Column">
            <div className="text-bold text-xm-gray">Vehicle Deployed</div>
            <div>20 FT</div>
          </MDBCol>
        </MDBRow>
      </div>
  );
}

export default Vehicle;
