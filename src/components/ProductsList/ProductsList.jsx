import React, { useContext, useEffect } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import ProductCard from './ProductCard/ProductCard';
import './ProductList.css'

const ProductsList = () => {
    const {products,getProducts} = useContext(productsContext)

    useEffect(()=>{
        getProducts()
    },[])
    return (
        <div className='products_list'>
            <div className='container'>
                <div className='flex'>
                    {products.map(elem=>(
                         <ProductCard key={elem.id} elem={elem}/>
                         ))}
                 </div>
            </div>
        </div>
    );
};

export default ProductsList;