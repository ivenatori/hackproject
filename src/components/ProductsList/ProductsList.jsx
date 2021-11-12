import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import './ProductList.css'

const ProductsList = () => {
    return (
        <div className='products_list'>
            <ProductCard/>
        </div>
    );
};

export default ProductsList;