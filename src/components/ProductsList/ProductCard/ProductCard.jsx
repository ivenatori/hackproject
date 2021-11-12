import React, { useContext } from 'react';
import { productsContext } from '../../../contexts/ProductsContext';
import './ProductCard.css'

const ProductCard = ({elem}) => {
    const {deleteProduct} = useContext(productsContext)
    console.log(elem)
    return (
        <div className='product_card'>
            <div className='pizza_image'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-CBujvGP3Q_bJGiTfffbZaUPi0PzsW8LJ_A&usqp=CAU" alt="" /></div>
            <div className='pizza_name'><h2>{elem.Pname}</h2></div>
            <div className='pizza_about'>{elem.about}</div>
            <div className='pizza_size'>
                <button>large</button><button>small</button>
            </div>
            
            <div className='pizza_price'>
                <button className='btn_to_basket'>в корзину</button>
                <span className='product_price'>{elem.priceLarge}</span>
            </div>
          <div><button onClick={(e)=>deleteProduct(elem.id)}>delete</button></div>
        </div>
    );
};

export default ProductCard;