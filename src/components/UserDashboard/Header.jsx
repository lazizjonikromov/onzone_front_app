import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan , faSignOutAlt } from '@fortawesome/fontawesome-free-solid'


const Header = () => {
    return (
        <>
            <div className="infoWrap">
                <div>
                    <h2>RED</h2>
                    <h3>+998943698058</h3>
                    <p>
                        <i className="fas fa-ban"></i> 
                        <FontAwesomeIcon icon={faBan} />
                        Identifikatsiyadan o‘tmagan
                        foydalanuvchi
                    </p>
                </div>
                <div id="logout" className="logout">
                    Chiqish <FontAwesomeIcon icon={faSignOutAlt} /> <i className="fas fa-sign-out-alt"></i>
                </div>
            </div>
        </>
    )
}

export default Header