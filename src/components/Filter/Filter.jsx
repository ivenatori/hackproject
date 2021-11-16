import React, { useContext } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import history from '../../helpers/history';
import './Filter.css'


const Filter = () => {
    const {getProducts} = useContext(productsContext)

    // function handleFilter(e) {
    //     console.log(e)
    //     const search = new URLSearchParams(history.location.search)
    //     search.set('product', e)
    //     history.push(`${history.location.pathname}?${search.toString()}`)
 
    //     getProducts(search.toString())
    //   }
    return (
        <div className='filter'>
            <div className='container'>
                    <div className='filter_menu'>
                        <ul className='filter_menu-flex'>
                            <a href='#пицца'><li>пиццы</li></a>
                            <a href='#роллы'><li>роллы</li></a>
                            <a href='#напитки'><li>напитки</li></a>
                            <a href='#соусы'><li>соусы</li></a>
                           
                        </ul>
                    </div>
            </div>
            
        </div>
    );
};

export default Filter;