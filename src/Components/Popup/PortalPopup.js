import Popup from '../../Components/Popup/Popup';
import * as _ReactDOM  from 'react-dom';

const portalPopup = (popupClose, popupTitle, popupMessage) => {
        return _ReactDOM.createPortal(
            <>
                <Popup popupClose={popupClose} popupTitle={popupTitle} popupMessage={popupMessage} />
                <div className="overlay"></div>
            </>
        , document.querySelector('body'))
}

export default portalPopup;