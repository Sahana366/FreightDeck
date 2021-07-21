import './Header.scss';

let logo = require('../../assets/icons/truck.png');
let profileImg = require('../../assets/icons/Driver.png');

function Header() {
  return (
    <div className="Header">
      <div className="Header-left">
          <img src={logo.default} alt="logo"></img>
          <div className="Heading">Freight Deck</div>
      </div>
      <div className="Header-right">
          <div className="Header-right-inner">
            <div className="Header-right-inner-left">
              <div className="Header-RIL-textUp">
                <span className="Header-RIL-textUp-colored">Shipper Admin</span> - Ashwath J</div>
              <div className="Header-RIL-textDown">10:24 AM, 08/05/2021</div>
            </div>
            <div>
              <img className="ProfileImage" src={profileImg.default} alt="profile"></img>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Header;