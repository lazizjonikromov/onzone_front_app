import React from 'react'
import Header from '../../components/UserDashboard/Header'
import MyCards from '../../components/UserDashboard/MyCards'
import Sidebar from '../../components/UserDashboard/Sidebar'

const MyCard = () => {
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
                                <a href="#!"><span>/</span> Kartalar - marketpleys ONZONE </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <h1>Shaxsiy kabinet</h1>
                        </div>
                        <Sidebar />

                        <div className="col-lg-9">
                            <Header />
                            <MyCards />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyCard