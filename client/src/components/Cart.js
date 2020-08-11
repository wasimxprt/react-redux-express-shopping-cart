import React from 'react';
import Navbar from "./Navbar"

function Cart(props) {
    return (
        <div className="container">
            <Navbar />
            <div className="cart">
                <div className="shopping-cart">
                    <div className="title">
                        Shopping Bag
                </div>

                    <div className="item">
                        <div className="buttons">
                            <span className="delete-btn"></span>
                            <span className="like-btn"></span>
                        </div>

                        <div className="image">
                            <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369" alt="" />
                        </div>

                        <div className="description">
                            <span>Common Projects</span>
                            <span>Bball High</span>
                            <span>White</span>
                        </div>

                        <div className="quantity">
                            <button className="plus-btn" type="button" name="button">
                                <img src="plus.svg" alt="" />
                            </button>
                            <input type="text" name="name" />
                            <button className="minus-btn" type="button" name="button">
                                <img src="minus.svg" alt="" />
                            </button>
                        </div>

                        <div className="total-price">$549</div>
                    </div>

                    <div className="item">
                        <div className="buttons">
                            <span className="delete-btn"></span>
                            <span className="like-btn"></span>
                        </div>

                        <div className="image">
                            <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369" alt="" />
                        </div>

                        <div className="description">
                            <span>Common Projects</span>
                            <span>Bball High</span>
                            <span>White</span>
                        </div>

                        <div className="quantity">
                            <button className="plus-btn" type="button" name="button">
                                <img src="plus.svg" alt="" />
                            </button>
                            <input type="text" name="name" />
                            <button className="minus-btn" type="button" name="button">
                                <img src="minus.svg" alt="" />
                            </button>
                        </div>

                        <div className="total-price">$549</div>
                    </div>

                    <div className="item">
                        <div className="buttons">
                            <span className="delete-btn"></span>
                            <span className="like-btn"></span>
                        </div>

                        <div className="image">
                            <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369" alt="" />
                        </div>

                        <div className="description">
                            <span>Common Projects</span>
                            <span>Bball High</span>
                            <span>White</span>
                        </div>

                        <div className="quantity">
                            <button className="plus-btn" type="button" name="button">
                                <img src="plus.svg" alt="" />
                            </button>
                            <input type="text" name="name" />
                            <button className="minus-btn" type="button" name="button">
                                <img src="minus.svg" alt="" />
                            </button>
                        </div>

                        <div className="total-price">$549</div>
                    </div>
                </div>
            </div>
            <div className="checkout">
                <div className="shopping-cart"></div>
            </div>
        </div>

    );
}

export default Cart;