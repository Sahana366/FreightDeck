import "./Shipment.scss";
import { MDBRow, MDBCol } from "mdbreact";

const rightArrow = require('../../../assets/icons/right-arrow.png');

function Shipment() {
  return (
      <div className="Truck-Card-two">
        <MDBRow>
          <MDBCol size="12" className="Card-Column pb-3">
            <div className="d-flex justify-content-start">
              <div>
                <div className="text-bold text-xm-gray">From</div>
                <div>Bangalore</div>
              </div>
              <div className="px-3 d-flex align-items-center">
                <img src={rightArrow.default} alt="icon" width="15px"></img>
              </div>
              <div>
                <div className="text-bold text-xm-gray">To</div>
                <div>Surat</div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
        <div className="text-xm-blue">Good Manifests</div>
        <MDBRow>
          <MDBCol size="4" className="Card-Column">
            <div className="text-bold text-xm-gray">Quantity</div>
            <div>250</div>
          </MDBCol>
          <MDBCol size="4" className="Card-Column">
            <div className="text-bold text-xm-gray">Total Weight</div>
            <div>12500</div>
          </MDBCol>
          <MDBCol size="4" className="Card-Column">
            <div className="text-bold text-xm-gray">Weight Unit</div>
            <div>Kg</div>
          </MDBCol>
          <MDBCol size="4" className="Card-Column">
            <div className="text-bold text-xm-gray">Total Volume</div>
            <div>31.25</div>
          </MDBCol>
          <MDBCol size="4" className="Card-Column">
            <div className="text-bold text-xm-gray">Volume Unit</div>
            <div>m<sup>3</sup></div>
          </MDBCol>
        </MDBRow>
      </div>
  );
}

export default Shipment;
