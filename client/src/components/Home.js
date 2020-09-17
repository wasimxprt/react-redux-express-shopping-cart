import React from 'react';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';
import Navbar from '../components/Navbar';

function Home(props) {
    return (
        <div className="container">
            <Navbar />
            <ProductFilter />
            <ProductList />
        </div>
    );
}

export default Home;