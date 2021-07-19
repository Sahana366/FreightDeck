import "./NavBar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [active, setActive] = useState("shipment-overview");
  return (
    <div className="NavBar">
      <div className="NavBar-top">
          <div className="NavBar-top-button">Home</div>
        <Link to="shipment-overview">
          <div
            className={
              active === "shipment-overview"
                ? "NavBar-top-button-Active"
                : "NavBar-top-button"
            }
            onClick={() => setActive("shipment-overview")}
          >
            Shipment Overview
          </div>
        </Link>
        <Link to="track">
          <div
            className={
              active === "track"
                ? "NavBar-top-button-Active"
                : "NavBar-top-button"
            }
            onClick={() => setActive("track")}
          >
            Track and Trace
          </div>
        </Link>
          <div className="NavBar-top-button">Event Overview</div>
      </div>
      <div className="NavBar-Bottom">
        <div className="NavBar-BDropdowns">
          <label>Plant</label>
          <br></br>
          <select name="plant" id="plant">
            <option value="3E">Plant 3E - PZTU-01</option>
            <option value="4E">Plant 4E - PZTU-01</option>
            <option value="5E">Plant 5E - PZTU-01</option>
            <option value="6E">Plant 6E - PZTU-01</option>
          </select>
        </div>
        <div className="NavBar-BDropdowns">
          <label>Department</label>
          <br></br>
          <select name="department" id="department">
            <option value="Gate 3E">Plant Gate 3E</option>
            <option value="Gate 4E">Plant Gate 4E</option>
            <option value="Gate 5E">Plant Gate 5E</option>
            <option value="Gate 6E">Plant Gate 6E</option>
          </select>
        </div>
        {active === "shipment-overview" && (
          <div className="NavBar-BDropdowns">
            <label>Unloading Point</label>
            <br></br>
            <select name="unloadingPoint" id="unloadingPoint">
              <option value=""></option>
              <option value="uploadingPoint2">Unloadingpoint2</option>
              <option value="uploadingPoint3">Unloadingpoint3</option>
              <option value="uploadingPoint4">Unloadingpoint4</option>
            </select>
          </div>
        )}

        {active === "track" && (
          <div className="NavBar-BDropdowns">
            <label>Truck ID</label>
            <br></br>
            <select name="truckid" id="truckid">
              <option value="truckid1">02237942</option>
              <option value="truckid2">02237943</option>
              <option value="truckid3">02237944</option>
              <option value="truckid4">02237945</option>
            </select>
          </div>
        )}

        {active === "track" && (
          <div className="NavBar-BDropdowns">
            <label>Material Number</label>
            <br></br>
            <select name="materialNumber" id="materialNumber">
              <option value=""></option>
              <option value="materialNumber1">Material Number</option>
              <option value="materialNumber2">Material Number2</option>
              <option value="materialNumber3">Material Number3</option>
              <option value="materialNumber4">Material Number4</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
