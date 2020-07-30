import React from 'react';
import productActions from '../actions/productActions';
import { useSelector, useDispatch } from 'react-redux';

import allActions from "../actions/index"

function Product(props) {
    const { product } = props;
    const dispatch = useDispatch();

    const addToCartHandler = (product) => {
        dispatch(allActions.cartActions.addToCart(product))
    }
    return (
        <React.Fragment>
            <div className="product-card">
                <div className="product-image">
                    <img alt="product image" src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369" />
                </div>
                <div className="product-info">
                    <h5>{product.name}</h5>
                    <h6>${product.price}</h6>
                </div>
                <div className="btn-wrapper">
                    <button type="button" className="btn" onClick={(event) => addToCartHandler(product)} name="add_to_cart">Add to Cart</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Product;