import React, { useState, useEffect } from 'react';
import Product from './Product';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';
import allActions from "../actions/index"

function ProductList(props) {

    const [products, setProducts] = useState([]);
    const [isNetworkError, setIsNetworkError] = useState(false);

    const dispatch = useDispatch();

    let options = {
        headers: {
            "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWQzMWUzODQzYTI5M2I4ODc1NjJhOCIsImlhdCI6MTU5NTg0MTU1MSwiZXhwIjoxNTk1OTI3OTUxfQ.7R3-poUxvyISQB0jnc2fWbH-zbhGbEazhczV2dx-vh4"
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(
                    'http://localhost:8080/products',
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
                }
            }
            finally {

            }

        };

        fetchData();
    }, []);

    return (
        <section className="products">{isNetworkError}
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