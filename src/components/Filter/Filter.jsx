import React from 'react';
import './Filter.css'


const Filter = () => {
    return (
        <div className='filter'>
            <div className='container'>
                    <div className='filter_menu'>
                        <ul className='filter_menu-flex'>
                            <li>пиццы</li>
                            <li>роллы</li>
                            <li>Мексиканская</li>
                            <li>4 сезона</li>
                            <li>напитки</li>
                            <li>соусы</li>
                        </ul>
                    </div>
            </div>
            
        </div>
    );
};

export default Filter;