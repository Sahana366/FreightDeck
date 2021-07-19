import "./Trucks.scss";

let truck = require('../../assets/icons/LogoIcon.png');
let urgent = require('../../assets/icons/truck-settings.png');
let delayed = require('../../assets/icons/delayed.png');
let customs = require('../../assets/icons/customs.png');
function Trucks() {
  return (
    <div className="Deck-Container">
      <div className="Heading-Text">Trucks</div>
      <div className="Trucks-Card-Deck">
          <div className="Truck-Card">
              <div className="Truck-Card-Body">
                  <div className="Card-div">
                    <img className="Trucks-Img" src={truck.default} alt="truck"></img>
                  </div>
                  <div className="Card-div Card-mid-content">
                      182
                  </div>
                  <div className="Card-div Card-right-content">
                      Total
                  </div>
              </div>
          </div>
          <div className="Truck-Card">
              <div className="Truck-Card-Body">
                  <div className="Card-div">
                    <img className="Trucks-Img" src={customs.default} alt="truck"></img>
                  </div>
                  <div className="Card-div Card-mid-content">
                      9
                  </div>
                  <div className="Card-div Card-right-content">
                      With 
                      Customs
                  </div>
              </div>
          </div>
          <div className="Truck-Card">
              <div className="Truck-Card-Body">
                  <div className="Card-div">
                    <img className="Trucks-Img" src={urgent.default} alt="truck"></img>
                  </div>
                  <div className="Card-div Card-mid-content">
                      1
                  </div>
                  <div className="Card-div Card-right-content">
                      With Urgent 
                      Part/s
                  </div>
              </div>
          </div>
          <div className="Truck-Card">
              <div className="Truck-Card-Body">
                  <div className="Card-div">
                    <img className="Trucks-Img" src={truck.default} alt="truck"></img>
                  </div>
                  <div className="Card-div Card-mid-content">
                      5
                  </div>
                  <div className="Card-div Card-right-content">
                      Without 
                      Time Slot
                  </div>
              </div>
          </div>
          <div className="Truck-Card">
              <div className="Truck-Card-Body">
                  <div className="Card-div">
                    <img className="Trucks-Img" src={delayed.default} alt="truck"></img>
                  </div>
                  <div className="Card-div Card-mid-content">
                      4
                  </div>
                  <div className="Card-div Card-right-content">
                      Delayed
                  </div>
              </div>
          </div>
          
      </div>
    </div>
  );
}

export default Trucks;
