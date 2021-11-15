import { CircularProgress } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import './Cart.css'
const Cart = () => {
    const {getProductsFromBasket,cart,changeProductCount} = useContext(productsContext)
    console.log(cart.cardToBasket)
    useEffect(()=>{
        getProductsFromBasket()
    },[])
    return (
        <div className='cart'>
        {cart.cardToBasket?(
        <div>
            <table>
                <thead>
                <tr>
                    <th>image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>CountSmall</th>
                    <th>CountLarge</th>
                    <th>SubPriceSmall</th>
                    <th>SubPriceLarge</th>
                    <th>SubPrice</th>
                </tr>
                </thead>
                <tbody>
                    {cart.cardToBasket.map(elem=>(

              <tr key={elem.item.id}>
              <td>
                <img src={elem.item.image} alt="product img" />
              </td>
              <td>{elem.item.title}</td>
              <td>{elem.item.price}</td>
              <td>
                <input value={elem.count} type="number" onChange ={(e)=> changeProductCount(e.target.value,elem.item.id)}/>
              </td>
              <td>
                <input value={elem.count} type="number" onChange ={(e)=> changeProductCount(e.target.value,elem.item.id)}/>
              </td>
              <td>{elem.subPriceSmall}</td>
              <td>{elem.subPriceLarge}</td>
              <td>{elem.subPrice}</td>
            </tr>

                    ))}
                   
                </tbody>
            </table>
            <h4>Total: {cart.totalPrice}</h4>
            <button>Купить</button>
        </div>
        ):  (<CircularProgress/>)}
    </div>

    
    );
};

export default Cart;