import "./TrackAndTrace.scss";
import ReactMapGL from "react-map-gl";
import { useState } from "react";
import Steps from "./Steps/Steps";

function TrackAndTrace() {
  let state = {
    numberOfSteps: 6,
    completedSteps: 4,
    stepsDetail: [
      {
        location: "Shivmogga : Goods to Pickup",
        time: "08:00 am, 12/05/2021",
      },
      {
        location: "Discrepancy - Taken with Differences",
        time: "08:49 am, 12/05/2021",
      },
      {
        location: "En Route",
        time: "09:39 am, 12/05/2021",
      },
      {
        location: "Tiptur Factory Waiting Area",
        time: "11:54 am, 12/05/2021",
      },
      {
        location: "En Route : Delay Caused by Rain",
        time: "01:32 pm, 12/05/2021",
      },
      {
        location: "Bangalore : Expected Arrival",
        time: "04:30 pm, 12/05/2021",
      },
    ],
  };

  const [viewport, setViewport] = useState({
    latitude: 12.93696363839788,
    longitude: 77.58751036362841,
    zoom: 10,
    width: "",
    height: "65vh",
  });
  return (
    <div className="Deck-Container">

      <div className="d-flex">
        <div className="mr-5">
          <span className="text-xm-gray">
            Time Stamp Current Notification :{" "}
          </span>
          <span className="text-bold text-xm-gray">10:36 am, 10/05/2021</span>
        </div>
        <div className="mr-5">
          <span className="text-xm-gray">
            Transportation Network :{" "}
          </span>
          <span className="text-bold text-xm-gray">Partial Load Network</span>
        </div>
        <div className="mr-5">
          <span className="text-xm-gray">
            Distance from Unloading Point :{" "}
          </span>
          <span className="text-bold text-xm-gray">112.4km</span>
        </div>
      </div>

      <div className="Truck-Card d-flex px-0 my-3">

        <div className="Map">
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken="pk.eyJ1Ijoic2FoYW5hMTIzIiwiYSI6ImNrcjdsNmFxeDNxajczMW82YzRkcnBoZGEifQ.cFFAByppaIEVT78yIzmtLw"
            onViewportChange={(viewport) => {
              setViewport(viewport);
            }}
          ></ReactMapGL>
        </div>

        <div className="Status">
          <div className="text-xm-blue pl-3 pt-3 pb-1 bb">Truck on Route</div>
          <div className="text-xm-gray pl-3 pt-2 pb-1 bb d-flex justify-content-between">
            <div>Weather Information</div>
            <div>
              <label class="switch">
                <input type="checkbox" onchange="switchMode(this)" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div className="text-sm-gray text-bold pl-3 pt-2 pb-1">
            Delivery Status
          </div>
          <div className="container">
            <div className="steps-card">
              <Steps
                stepsDetail={state.stepsDetail}
                completedSteps={state.completedSteps}
              />
            </div>
            <div>
              <button className="deck-button">See Event Overview</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TrackAndTrace;
