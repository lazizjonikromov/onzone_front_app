import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <>
            <div className="col-lg-3">
                <div className="leftCards myShadow">
                    <a className="active" href="#!">
                        <span><b className="icon icon-profile-1"></b> Xaridlar</span
                        ><FontAwesomeIcon icon={faAngleRight}  />  </a>
                    <a className="" href="my-cards">
                        <span
                        ><b className="icon icon-profile-2"></b> Mening kartalarim </span
                        ><FontAwesomeIcon icon={faAngleRight}  /> </a>
                    <a className="" href="#!">
                        <span><b className="icon icon-profile-3"></b> Kreditlar</span
                        ><FontAwesomeIcon icon={faAngleRight}  /> </a>
                    <a className="" href="personal">
                        <span
                        ><b className="icon icon-profile-4"></b> Shaxsiy ma'lumotlar</span
                        ><FontAwesomeIcon icon={faAngleRight}  /> </a>
                    <a className="" href="#!">
                        <span
                        ><b className="icon icon-profile-5"></b> Parolni almashtirish </span
                        ><FontAwesomeIcon icon={faAngleRight}  /> </a>
                </div>
            </div>
        </>
    )
}

export default Sidebar