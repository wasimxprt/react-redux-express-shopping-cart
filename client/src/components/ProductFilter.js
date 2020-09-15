import React from 'react';
import { useSelector } from 'react-redux';

function ProductFilter(props) {

    const productObj = useSelector(state => state.product);
    const hasError = productObj.error && productObj.error !== "" ? true : false;

    if (hasError) {
        return (
            <p className="token-error">{productObj.error+" Please login to access products!"}</p>
        )
    }
    return (

        <nav className="product-filter">
            <h1>Jackets</h1>

            <div className="sort">
                <div className="collection-sort">
                    <label>Filter by:</label>
                    <select>
                        <option value="/">All Jackets</option>
                        <option value="/">2016</option>
                        <option value="/">jacket</option>
                        <option value="/">Jackets</option>
                        <option value="/">layers</option>
                        <option value="/">Obermeyer</option>
                        <option value="/">Roxy</option>
                        <option value="/">womens</option>
                    </select>
                </div>

                <div className="collection-sort">
                    <label>Sort by:</label>
                    <select>
                        <option value="/">Featured</option>
                        <option value="/">Best Selling</option>
                        <option value="/">Alphabetically, A-Z</option>
                        <option value="/">Alphabetically, Z-A</option>
                        <option value="/">Price, low to high</option>
                        <option value="/">Price, high to low</option>
                        <option value="/">Date, new to old</option>
                        <option value="/">Date, old to new</option>
                    </select>
                </div>
            </div>
        </nav>

    );
}

export default ProductFilter;