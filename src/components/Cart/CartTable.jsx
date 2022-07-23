import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid'
import CartModal from './CartModal'


const CartTable = () => {
    const [modal, setModal] = useState(false)
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
                                            <FontAwesomeIcon icon={faTrash} />
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
                                                    onClick={() => setModal(true)}
                                                >
                                                    TEXNO DUNYO
                                                </button>
                                                
                                                <CartModal modal={modal} setModal={setModal} />

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
                                            <FontAwesomeIcon icon={faTrash} />
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