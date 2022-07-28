import React from 'react'
import ChangePasswordPart from '../../components/UserDashboard/ChangePasswordPart'
import Header from '../../components/UserDashboard/Header'
import Sidebar from '../../components/UserDashboard/Sidebar'

const ChangePassword = () => {
    return (
        <>
            <div className="shaxsiy-kabinet my-cards">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="slash">
                                <a className="m-0" href="/">Bosh sahifa</a>
                                <a className="m-0" href="/pages/scoring"
                                ><span>/</span> Shaxsiy kabinet
                                </a>
                                <a href="#!"><span>/</span> Kreditlar - marketpleys ONZONE </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <h1>Kreditlar</h1>
                        </div>
                        <Sidebar />

                        <div className="col-lg-9">
                            <Header />
                            <ChangePasswordPart />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePassword