import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faClock } from '@fortawesome/fontawesome-free-solid'


const CartModal = ({modal, setModal}) => {
    return (
        <>
            <>
                <div className={`modal modal-dialog modal-dialog-centered ${modal ? 'active' : ''}`}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                TEXNO DUNYO
                            </h5>
                            <button
                                type="button"
                                className="close"
                                onClick={() => setModal(false)}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="company-data">
                                <div className="address">
                                    {/* <i className="fas fa-map-marker-alt"></i> */}
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    <p>
                                        Toshkent shahri telegramda kuzatib boring!
                                        @texno_dunyo
                                    </p>
                                </div>
                                <a href="tel:+998946408356" className="phone">
                                    {/* <i className="fas fa-phone-alt"></i> */}
                                    <FontAwesomeIcon icon={faPhone} />
                                    <p>+998 94 640 83 56</p>
                                </a>
                                <div className="time">
                                    {/* <i className="fas fa-clock"></i> */}
                                    <FontAwesomeIcon icon={faClock}  />
                                    <p>8:00 - 22:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setModal(false)} className="back"></div>
                </div>
            </>
        </>
    )
}

export default CartModal
