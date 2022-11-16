import crossPic from "../../images/Popup/cross_pic.svg";
import checkMarkPic from "../../images/Popup/checkmark_pic.svg"
import './InfoToolTip.css';

function InfoToolTip({ isOpen, onClose, toolTipText, isSuccessful }) {
    return (
        <div className={`popup popup_type_tooltip" ${isOpen && 'popup_opened'}`}>
            <div className="popup__container popup__container_place_tooltip">
                <button
                    type="button"
                    className="popup__close-button"
                    onClick={onClose}>
                </button>
                <img
                    className="popup__checkin-pic"
                    src={isSuccessful ? checkMarkPic : crossPic}
                    alt="Индикатор успеха" />
                <h3
                    className="popup__checkin-tooltip">
                    {toolTipText}
                </h3>
            </div>
        </div>
    )
}

export default InfoToolTip;