import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CartTable = () => {
    return (
        <>
            <div className="cartTable">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="slash">
                                <a href="/">Bosh sahifa</a>
                                <a href="#!"><span>/</span> Savatcha </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <h1>Savatcha (1)</h1>
                        </div>

                        <div className="row all-cart">
                            <div className="col-lg-9 cart-product">
                                <div className="carts">
                                    <div className="cart-left">
                                        <button className="btn btn-outline-danger delete-cart">
                                            <i className="fas fa-trash"></i>
                                            {/* <FontAwesomeIcon icon={} /> */}
                                        </button>

                                        <div className="lefts">
                                            <div className="img">
                                                <img src="/image/phone.webp" alt="" className="w-100" />
                                            </div>

                                            <div className="cart-product-name">
                                                <h3>Смартфон Samsung Galaxy A12 32GB Black</h3>
                                                <button
                                                    type="button"
                                                    className="btn btn-light"
                                                    data-toggle="modal"
                                                    data-target="#exampleModal"
                                                >
                                                    TEXNO DUNYO
                                                </button>

                                                <div
                                                    className="modal fade"
                                                    id="exampleModal"
                                                    tabindex="-1"
                                                    aria-labelledby="exampleModalLabel"
                                                    aria-hidden="true"
                                                >
                                                    <div className="modal-dialog modal-dialog-centered">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">
                                                                    TEXNO DUNYO
                                                                </h5>
                                                                <button
                                                                    type="button"
                                                                    className="close"
                                                                    data-dismiss="modal"
                                                                    aria-label="Close"
                                                                >
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="company-data">
                                                                    <div className="address">
                                                                        <i className="fas fa-map-marker-alt"></i>
                                                                        <p>
                                                                            Toshkent shahri telegramda kuzatib boring!
                                                                            @texno_dunyo
                                                                        </p>
                                                                    </div>
                                                                    <a href="tel:+998946408356" className="phone">
                                                                        <i className="fas fa-phone-alt"></i>
                                                                        <p>+998 94 640 83 56</p>
                                                                    </a>
                                                                    <div className="time">
                                                                        <i className="fas fa-clock"></i>
                                                                        <p>8:00 - 22:00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cart-product-price">
                                            <h4>2 100 000 so'm</h4>
                                            <button className="btn btn-danger">
                                                Yetkazib berish <span>50 000 so'm</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="cart-right">
                                        <button className="btn btn-outline-danger delete-cart">
                                            <i className="fas fa-trash"></i>
                                        </button>

                                        <div className="quantity">
                                            <div className="quantity-input">
                                                <div className="btn btn-increase"></div>
                                                <input
                                                    type="text"
                                                    name="product-quantity"
                                                    value="1"
                                                    data-max="120"
                                                    pattern="[0-9]*"
                                                    min="1"
                                                />
                                                <div className="btn btn-decrease"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carts">
                                    <div className="cart-left">
                                        <button className="btn btn-outline-danger delete-cart">
                                            <i className="fas fa-trash"></i>
                                        </button>

                                        <div className="lefts">
                                            <div className="img">
                                                <img src="/image/phone.webp" alt="" className="w-100" />
                                            </div>

                                            <div className="cart-product-name">
                                                <h3>Смартфон Samsung Galaxy A12 32GB Black</h3>
                                                <button
                                                    type="button"
                                                    className="btn btn-light"
                                                    data-toggle="modal"
                                                    data-target="#exampleModal"
                                                >
                                                    TEXNO DUNYO
                                                </button>

                                                <div
                                                    className="modal fade"
                                                    id="exampleModal"
                                                    tabindex="-1"
                                                    aria-labelledby="exampleModalLabel"
                                                    aria-hidden="true"
                                                >
                                                    <div className="modal-dialog modal-dialog-centered">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">
                                                                    TEXNO DUNYO
                                                                </h5>
                                                                <button
                                                                    type="button"
                                                                    className="close"
                                                                    data-dismiss="modal"
                                                                    aria-label="Close"
                                                                >
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="company-data">
                                                                    <div className="address">
                                                                        <i className="fas fa-map-marker-alt"></i>
                                                                        <p>
                                                                            Toshkent shahri telegramda kuzatib boring!
                                                                            @texno_dunyo
                                                                        </p>
                                                                    </div>
                                                                    <a href="tel:+998946408356" className="phone">
                                                                        <i className="fas fa-phone-alt"></i>
                                                                        <p>+998 94 640 83 56</p>
                                                                    </a>
                                                                    <div className="time">
                                                                        <i className="fas fa-clock"></i>
                                                                        <p>8:00 - 22:00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cart-product-price">
                                            <h4>2 100 000 so'm</h4>
                                            <button className="btn btn-danger">
                                                Yetkazib berish <span>50 000 so'm</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="cart-right">
                                        <button className="btn btn-outline-danger delete-cart">
                                            <i className="fas fa-trash"></i>
                                        </button>

                                        <div className="quantity">
                                            <div className="quantity-input">
                                                <div className="btn btn-increase"></div>
                                                <input
                                                    type="text"
                                                    name="product-quantity"
                                                    value="1"
                                                    data-max="120"
                                                    pattern="[0-9]*"
                                                    min="1"
                                                />
                                                <div className="btn btn-decrease"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carts">
                                    <div className="cart-left">
                                        <button className="btn btn-outline-danger delete-cart">
                                            <i className="fas fa-trash"></i>
                                        </button>

                                        <div className="lefts">
                                            <div className="img">
                                                <img src="/image/phone.webp" alt="" className="w-100" />
                                            </div>

                                            <div className="cart-product-name">
                                                <h3>Смартфон Samsung Galaxy A12 32GB Black</h3>
                                                <button
                                                    type="button"
                                                    className="btn btn-light"
                                                    data-toggle="modal"
                                                    data-target="#exampleModal"
                                                >
                                                    TEXNO DUNYO
                                                </button>

                                                <div
                                                    className="modal fade"
                                                    id="exampleModal"
                                                    tabindex="-1"
                                                    aria-labelledby="exampleModalLabel"
                                                    aria-hidden="true"
                                                >
                                                    <div className="modal-dialog modal-dialog-centered">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">
                                                                    TEXNO DUNYO
                                                                </h5>
                                                                <button
                                                                    type="button"
                                                                    className="close"
                                                                    data-dismiss="modal"
                                                                    aria-label="Close"
                                                                >
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="company-data">
                                                                    <div className="address">
                                                                        <i className="fas fa-map-marker-alt"></i>
                                                                        <p>
                                                                            Toshkent shahri telegramda kuzatib boring!
                                                                            @texno_dunyo
                                                                        </p>
                                                                    </div>
                                                                    <a href="tel:+998946408356" className="phone">
                                                                        <i className="fas fa-phone-alt"></i>
                                                                        <p>+998 94 640 83 56</p>
                                                                    </a>
                                                                    <div className="time">
                                                                        <i className="fas fa-clock"></i>
                                                                        <p>8:00 - 22:00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cart-product-price">
                                            <h4>2 100 000 so'm</h4>
                                            <button className="btn btn-danger">
                                                Yetkazib berish <span>50 000 so'm</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="cart-right">
                                        <button className="btn btn-outline-danger delete-cart">
                                            <i className="fas fa-trash"></i>
                                        </button>

                                        <div className="quantity">
                                            <div className="quantity-input">
                                                <div className="btn btn-increase"></div>
                                                <input
                                                    type="text"
                                                    name="product-quantity"
                                                    value="1"
                                                    data-max="120"
                                                    pattern="[0-9]*"
                                                    min="1"
                                                />
                                                <div className="btn btn-decrease"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 cart-total">
                                <div className="total">
                                    <h4>Umumiy summa</h4>
                                    <h2>2 150 000 <span>so'm</span></h2>
                                    <p>Xaridni davom ettirish uchun tizimga kiring!</p>
                                    <a href="#!" className="btn btn-success">Tizimga kirish</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartTable