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
                    <img alt="product image" src={product.image} />
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