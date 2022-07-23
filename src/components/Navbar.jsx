import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/fontawesome-free-regular'
import { faHandshake } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="Navbar">
                {/* Navigation */}

                <div id="nav" className="nav-01">
                    <div className="fixedCatalog">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 myCol">
                                    <nav className="desktop">
                                        <div className="nav nav-tabs myNav" id="nav-tab" role="tablist">
                                            <a
                                                className="nav-link active"
                                                id="nav-home-tab"
                                                data-toggle="tab"
                                                href="#phone"
                                                role="tab"
                                                aria-controls="phone"
                                                aria-selected="true"
                                            >
                                                <span>Telefonlar va gadjetlar</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/1.png" alt="" />
                                                </span>
                                            </a>
                                            <a
                                                className="nav-link"
                                                id="nav-profile-tab"
                                                data-toggle="tab"
                                                href="#home"
                                                role="tab"
                                                aria-controls="home"
                                                aria-selected="false"
                                            >
                                                <span>Yirik maishiy texnika</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/2.png" alt="" />
                                                </span>
                                            </a>
                                            <a
                                                className="nav-link"
                                                id="nav-contact-tab"
                                                data-toggle="tab"
                                                href="#tv"
                                                role="tab"
                                                aria-controls="tv"
                                                aria-selected="false"
                                            >
                                                <span>Kichik maishiy texnika</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/3.png" alt="" />
                                                </span>
                                            </a>

                                            <a
                                                className="nav-link"
                                                id="nav-contact-tab2"
                                                data-toggle="tab"
                                                href="#tv"
                                                role="tab"
                                                aria-controls="tv"
                                                aria-selected="false"
                                            >
                                                <span>Kichik maishiy texnika</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/8.png" alt="" />
                                                </span>
                                            </a>

                                            <a
                                                className="nav-link"
                                                id="nav-contact-tab3"
                                                data-toggle="tab"
                                                href="#tv"
                                                role="tab"
                                                aria-controls="tv"
                                                aria-selected="false"
                                            >
                                                <span>Kichik maishiy texnika</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/7.png" alt="" />
                                                </span>
                                            </a>

                                            <a
                                                className="nav-link"
                                                id="nav-contact-tab4"
                                                data-toggle="tab"
                                                href="#tv"
                                                role="tab"
                                                aria-controls="tv"
                                                aria-selected="false"
                                            >
                                                <span>Kichik maishiy texnika</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/4.png" alt="" />
                                                </span>
                                            </a>

                                            <a
                                                className="nav-link"
                                                id="nav-contact-tab5"
                                                data-toggle="tab"
                                                href="#tv"
                                                role="tab"
                                                aria-controls="tv"
                                                aria-selected="false"
                                            >
                                                <span>Kichik maishiy texnika</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/5.png" alt="" />
                                                </span>
                                            </a>

                                            <a
                                                className="nav-link"
                                                id="nav-contact-tab6"
                                                data-toggle="tab"
                                                href="#tv"
                                                role="tab"
                                                aria-controls="tv"
                                                aria-selected="false"
                                            >
                                                <span>Kichik maishiy texnika</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/6.png" alt="" />
                                                </span>
                                            </a>
                                        </div>
                                    </nav>

                                    <nav className="mobile">
                                        <h1>
                                            <a href="pages/add-card"
                                            >Skoringdan o'tish <i className="far fa-credit-card"></i
                                            ></a>
                                        </h1>
                                        <div className="world">
                                            Oʻzbekcha
                                            <i className="fas ml-2 fa-angle-down"></i>

                                            <div className="langWrap">
                                                <a href="#">Русский</a>
                                                <a href="#">Oʻzbekcha</a>
                                            </div>
                                        </div>
                                        <h2>Katalog</h2>
                                        <div className="nav nav-tabs myNav">
                                            <a className="nav-link" href="pages/catalog/phone">
                                                <span>Telefonlar va gadjetlar</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/1.png" alt="" />
                                                </span>
                                            </a>
                                            <a className="nav-link" href="pages/catalog/phone">
                                                <span>Yirik maishiy texnika</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/2.png" alt="" />
                                                </span>
                                            </a>
                                            <a className="nav-link" href="pages/catalog/phone">
                                                <span>Kichik maishiy texnika</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/3.png" alt="" />
                                                </span>
                                            </a>

                                            <a className="nav-link" href="pages/catalog/phone">
                                                <span>Kichik maishiy texnika</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/8.png" alt="" />
                                                </span>
                                            </a>

                                            <a className="nav-link" href="pages/catalog/phone">
                                                <span>Kichik maishiy texnika</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/7.png" alt="" />
                                                </span>
                                            </a>

                                            <a className="nav-link" href="pages/catalog/phone">
                                                <span>Kichik maishiy texnika</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/4.png" alt="" />
                                                </span>
                                            </a>

                                            <a className="nav-link" href="pages/catalog/phone">
                                                <span>Kichik maishiy texnika</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/5.png" alt="" />
                                                </span>
                                            </a>

                                            <a className="nav-link" href="pages/catalog/phone">
                                                <span>Kichik maishiy texnika</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/6.png" alt="" />
                                                </span>
                                            </a>
                                        </div>
                                    </nav>
                                </div>
                                <div className="col-8 d-none d-lg-block">
                                    <div className="tab-content" id="nav-tabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="phone"
                                            role="tabpanel"
                                            aria-labelledby="phone"
                                        >
                                            <div className="row">
                                                <div className="col-12">
                                                    <h1>
                                                        <a href="/pages/all-category"
                                                        >Telefonlar va gadjetlar</a
                                                        >
                                                    </h1>
                                                </div>
                                                <div className="col-9 d-flex">
                                                    <div className="mr-5">
                                                        <a href="#"><b>Planshetlar</b></a>

                                                        <a href="#"
                                                        ><b>Smartfon va telefonlar uchun aksessuarlar</b></a
                                                        >
                                                        <a href="#">Simsiz zaryadkalash moslamalari</a>
                                                        <a href="#">Aqlli qo‘l soatlari va brasletlar</a>
                                                        <a href="#">Sizsiz quloqchinlar</a>
                                                        <a href="#">Tashqi akkumulyatorlar (Power bank)</a>
                                                    </div>
                                                    <div>
                                                        <a href="#"><b>Telefonlar</b></a>
                                                        <a href="#">Smartfonlar</a>
                                                        <a href="#">Radiotelefonlar</a>

                                                        <a href="#"><b>Elektron kitoblar</b></a>
                                                        <a href="#"><b>Fakslar</b></a>
                                                        <a href="#"><b>Grafik planshetlar</b></a>
                                                    </div>
                                                </div>
                                                <div className="col-3 right">
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed1.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed2.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed3.png" alt=""
                                                            /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="home"
                                            role="tabpanel"
                                            aria-labelledby="home"
                                        >
                                            <div className="row">
                                                <div className="col-12">
                                                    <h1>
                                                        <a href="/pages/all-category">Yirik maishiy texnika</a>
                                                    </h1>
                                                </div>
                                                <div className="col-9 d-flex">
                                                    <div className="mr-5">
                                                        <a href="#"><b>Planshetlar</b></a>

                                                        <a href="#"
                                                        ><b>Smartfon va telefonlar uchun aksessuarlar</b></a
                                                        >
                                                        <a href="#">Simsiz zaryadkalash moslamalari</a>
                                                        <a href="#">Aqlli qo‘l soatlari va brasletlar</a>
                                                        <a href="#">Sizsiz quloqchinlar</a>
                                                        <a href="#">Tashqi akkumulyatorlar (Power bank)</a>
                                                    </div>
                                                    <div>
                                                        <a href="#"><b>Telefonlar</b></a>
                                                        <a href="#">Smartfonlar</a>
                                                        <a href="#">Radiotelefonlar</a>

                                                        <a href="#"><b>Elektron kitoblar</b></a>
                                                        <a href="#"><b>Fakslar</b></a>
                                                        <a href="#"><b>Grafik planshetlar</b></a>
                                                    </div>
                                                </div>
                                                <div className="col-3 right">
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed1.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed2.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed3.png" alt=""
                                                            /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="tv"
                                            role="tabpanel"
                                            aria-labelledby="tv"
                                        >
                                            <div className="row">
                                                <div className="col-12">
                                                    <h1>
                                                        <a href="/pages/all-category">Kichik maishiy texnika</a>
                                                    </h1>
                                                </div>
                                                <div className="col-9 d-flex">
                                                    <div className="mr-5">
                                                        <a href="#"><b>Planshetlar</b></a>

                                                        <a href="#"
                                                        ><b>Smartfon va telefonlar uchun aksessuarlar</b></a
                                                        >
                                                        <a href="#">Simsiz zaryadkalash moslamalari</a>
                                                        <a href="#">Aqlli qo‘l soatlari va brasletlar</a>
                                                        <a href="#">Sizsiz quloqchinlar</a>
                                                        <a href="#">Tashqi akkumulyatorlar (Power bank)</a>
                                                    </div>
                                                    <div>
                                                        <a href="#"><b>Telefonlar</b></a>
                                                        <a href="#">Smartfonlar</a>
                                                        <a href="#">Radiotelefonlar</a>

                                                        <a href="#"><b>Elektron kitoblar</b></a>
                                                        <a href="#"><b>Fakslar</b></a>
                                                        <a href="#"><b>Grafik planshetlar</b></a>
                                                    </div>
                                                </div>
                                                <div className="col-3 right">
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed1.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed2.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed3.png" alt=""
                                                            /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-1 col-md-3 col-4 p-lg-0">
                                <Link to={'/'} className="logo">
                                    <img src="/image/logo.png" alt="" className="w-100" />
                                </Link>
                            </div>
                            <div
                                className="col-lg-11 col-md-9 col-8 skoring d-flex align-items-center"
                            >
                                <div
                                    id="catalogId"
                                    className="catalog div mobileContent"
                                >
                                    <i className="icon icon-search"></i> Katalog
                                </div>
                                <a href="pages/add-card" className="btn mobileContent"
                                ><FontAwesomeIcon icon={faCreditCard} />Skoringdan o`tish </a>
                                <form className="mobileContent">
                                    <i className=""><img src="/image/search.svg" alt="" /></i>
                                    <input
                                        type="text"
                                        placeholder="Mahsulotlarni qidirish"
                                        className="form-control"
                                    />
                                </form>

                                <div className="d-flex align-items-center ml-auto">
                                    <div className="world mobileContent">
                                        <FontAwesomeIcon icon={faGlobe} />
                                        <FontAwesomeIcon icon={faAngleDown} />

                                        <div className="langWrap">
                                            <a href="#">Русский</a>
                                            <a href="#">Oʻzbekcha</a>
                                        </div>
                                    </div>
                                    <a href="pages/cart" className="cart">
                                        <i className="icon icon-cart"></i>
                                        <h5>0</h5>
                                    </a>
                                    <a href="pages/wishList" className="heart mobileContent">
                                        <i className="icon icon-heart"></i>
                                        <h5>0</h5>
                                    </a>
                                    <a href="pages/scoring" className="user">
                                        <img src="/image/user.svg" alt="" />
                                    </a>

                                    <div id="mobileMenu" className="mobileMenu">
                                        <div className="line m-0">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-12">
                            <input type="text" className="form-control" name="" id="">
                        </div> */}
                            {/* <div className="col-4 search">
                        </div>
                        <div className="col-2 contact">
                        </div>
                        <div className="col-2 d-flex justify-content-end">
                        </div> */}
                        </div>
                    </div>
                </div>

                <div className="navbarLine"></div>

                <div className="nav-02">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 d-flex align-items-center justify-content-between">
                                {/* <a className="btn katalog">
                                <i className="fas fa-th-list"></i>Katalog
                            </a> */}
                                <a href="pages/catalog/phone" className="btn">Smartfonlar</a>
                                <a href="pages/catalog/phone" className="btn"
                                >O‘rnatiluvchi texnika</a
                                >
                                <a href="pages/catalog/phone" className="btn">Televizorlar</a>
                                <a href="pages/catalog/phone" className="btn"
                                >Kir yuvish mashinalari</a
                                >
                                <a href="pages/catalog/phone" className="btn">Muzlatkichlar</a>
                                <a
                                    href="pages/cooperation"
                                    className="btn btn-light d-flex align-items-center"
                                >
                                    Hamkorlik Qilish <FontAwesomeIcon icon={faHandshake} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
