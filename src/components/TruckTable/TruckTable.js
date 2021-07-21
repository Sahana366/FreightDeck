import "./TruckTable.scss";

const refresh = require("../../assets/icons/refresh_black_24dp.svg");
const settings = require("../../assets/icons/settings_black_24dp.svg");
const calander = require("../../assets/icons/event_black_24dp.svg");
const download = require("../../assets/icons/file_download_black_24dp.svg");
function TruckTable() {
  return (
    <div className="Deck-Container">
      <div className="Trucks-Delayed-heading">
        <div className="Heading-Text Trucks-Delayed-heading">
          <div>
            <span className="Delayed-Number">2</span>Trucks Delayed
          </div>
        </div>
        <div>
          <span className="pr-3">
            <img src={refresh.default} alt="refresh" width="20px"></img>
          </span>
          <span className="pr-3">
            <img src={settings.default} alt="settings" width="19px"></img>
          </span>
          <span className="pr-3">
            <img src={calander.default} alt="calander" width="18px"></img>
          </span>
          <span>
            <img src={download.default} alt="download" width="18px"></img>
          </span>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Truck ID</th>
            <th>Vehicle Number</th>
            <th>Carrier</th>
            <th>Carrier Name</th>
            <th>Supply Concept</th>
            <th>Location</th>
            <th>Time Slot</th>
            <th>Customs</th>
            <th>ETA Date</th>
            <th>Shipment No</th>
            <th>Urgent Parts</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>023483456</td>
            <td>HH H08764</td>
            <td>40221282</td>
            <td>XYZ Express</td>
            <td>JIT</td>
            <td>5001A</td>
            <td>06:00 pm, 12/05/2021</td>
            <td>No</td>
            <td>06:00 pm, 12/05/2021(+31hr 21min)</td>
            <td>5427382821</td>
            <td></td>
            <td className="Delayed">Delayed</td>
          </tr>
          <tr>
            <td>023483456</td>
            <td>HH H08764</td>
            <td>40221282</td>
            <td>XYZ Express</td>
            <td>JIT</td>
            <td>5001A</td>
            <td>06:00 pm, 12/05/2021</td>
            <td>No</td>
            <td>06:00 pm, 12/05/2021(+31hr 21min)</td>
            <td>5427382821</td>
            <td></td>
            <td className="Delayed">Delayed</td>
          </tr>
          <tr>
            <td>023483456</td>
            <td>HH H08764</td>
            <td>40221282</td>
            <td>XYZ Express</td>
            <td>JIT</td>
            <td>5001A</td>
            <td>06:00 pm, 12/05/2021</td>
            <td>No</td>
            <td>06:00 pm, 12/05/2021(+31hr 21min)</td>
            <td>5427382821</td>
            <td></td>
            <td className="OnTime">On Time</td>
          </tr>
          <tr>
            <td>023483456</td>
            <td>HH H08764</td>
            <td>40221282</td>
            <td>XYZ Express</td>
            <td>JIT</td>
            <td>5001A</td>
            <td>06:00 pm, 12/05/2021</td>
            <td>No</td>
            <td>06:00 pm, 12/05/2021(+31hr 21min)</td>
            <td>5427382821</td>
            <td></td>
            <td className="OnTime">On Time</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TruckTable;
