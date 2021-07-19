import './UrgentMessage.scss';
const attention = require('../../../assets/icons/attention.png')
function UrgentMessage() {
    return (
        <div className="Truck-Card p-3 d-flex">
            <div><img className="attention-img" src={attention.default} alt="attention"></img></div>
            <div>
            <div className="text-bold text-xm-gray pb-1">Potential Delay at loading point B1</div>
            <div className="text-xm-gray pb-1">Delivery Note : 243434568</div>
            <div className="text-xm-gray pb-1">Truck ID : 0782392932</div>
            <div className="text-xm-gray pb-1">Vehicle Number : HH HO867</div>
            </div>
        </div>
    )
}

export default UrgentMessage;