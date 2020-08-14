import React from 'react';

import plus from '../assets/img/plus.svg';
import minus from '../assets/img/minus.svg';
import allActions from "../actions/index"

import { useSelector, useDispatch } from 'react-redux';

function CartItem(props) {
    const  product  = props.item; 
    const dispatch = useDispatch();

    return (
        <div className="item">
            <div className="buttons">
                <span className="delete-btn" onClick={()=>dispatch(allActions.cartActions.removeFromCart(product._id))}></span>
                <span className="like-btn"></span>
            </div>

            <div className="image">
                <img src={product.image} alt="" />
            </div>

            <div className="description">
                <span>{product.name}</span>
                {/* <span>Bball High</span> */}
                <span>White</span>
            </div>

            <div className="quantity">
                <button className="plus-btn" type="button" name="button">
                    <img src={plus} alt="" />
                </button>
                <input type="text" name="name" defaultValue="1" />
                <button className="minus-btn" type="button" name="button">
                    <img src={minus} alt="" />
                </button>
            </div>

            <div className="total-price">${product.price}</div>
        </div>
    );
}

export default CartItem;