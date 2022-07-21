import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import NewProducts from '../components/NewProducts'
import PopularCategory from '../components/PopularCategory'
import PopularProducts from '../components/PopularProducts'
import Sidebar from '../components/Sidebar'
import SmartPhoneProducts from '../components/SmartPhoneProducts'

const Main = () => {
    return (
        <>
            <Navbar />
            <Header />
            <PopularCategory />

            <div className="pop-products">
                <div className="container">
                    <div className="row">
                        <div className="col-3 p-0 d-none d-lg-block pop-pro-sidebar">
                            <Sidebar />
                        </div>

                        <div className="col-lg-9 pop-product">
                            <PopularProducts />
                            <NewProducts />
                            <SmartPhoneProducts />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Main