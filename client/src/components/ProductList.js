import React, { useState, useEffect } from 'react';
import Product from './Product';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import allActions from "../actions/index";
import { startLoading, stopLoading } from '../actions/loadingActions'

function ProductList(props) {

    const [products, setProducts] = useState([]);
    const [isNetworkError, setIsNetworkError] = useState(false);

    const dispatch = useDispatch();

    let options = {
        headers: {
            "x-access-token": (localStorage.getItem("token") && typeof localStorage.getItem("token") !== 'undefined') ? JSON.parse(localStorage.getItem("token")) : ""
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(
                    'http://localhost:8080/products', options
                );
                dispatch(allActions.productActions.setProducts(result.data.products))
                setProducts(result.data.products);
            } catch (error) {

                if (!error.response) {
                    setIsNetworkError(true)
                } else {
                    // http status code
                    const code = error.response.status
                    // response data
                    const response = error.response.data

                    dispatch(allActions.productActions.setProductsError(response));
                }
            }
            finally {

            }

        };

        fetchData();
    }, []);

    return (
        <section className="products">
            {
                isNetworkError ? <h1>Something went wrong! Unable to fetch product list</h1> :
                    products.map((product, index) => (
                        <Product product={product} key={index} />
                    ))
            }

        </section>
    );
}

export default ProductList;