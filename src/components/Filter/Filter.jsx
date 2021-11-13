import React, { useContext } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import history from '../../helpers/history';
import './Filter.css'


const Filter = () => {
    const {getProducts} = useContext(productsContext)

    function handleFilter(e) {
        console.log(e)
        const search = new URLSearchParams(history.location.search)
        search.set('product', e)
        history.push(`${history.location.pathname}?${search.toString()}`)
 
        getProducts(search.toString())
      }
    return (
        <div className='filter'>
            <div className='container'>
                    <div className='filter_menu'>
                        <ul className='filter_menu-flex'>
                            <li onClick={(e)=>handleFilter('pizza')}>пиццы</li>
                            <li onClick={(e)=>handleFilter('sushi')}>роллы</li>
                            <li onClick={(e)=>handleFilter('drinks')}>напитки</li>
                            <li onClick={(e)=>handleFilter('sous')}>4 соусы</li>
                            <li onClick={(e)=>handleFilter()}>ntcn</li>
                            <li onClick={(e)=>handleFilter()}>ntct</li>
                        </ul>
                    </div>
            </div>
            
        </div>
    );
};

export default Filter;