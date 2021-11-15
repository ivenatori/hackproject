import { CircularProgress } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import './Cart.css'
const Cart = () => {
    const {addToBasket,getProductsFromBasket,cart,changeLargeProductCount,changeSmallProductCount} = useContext(productsContext)
    useEffect(()=>{
        getProductsFromBasket()
    },[])

    function deleteFromBasket (id){
        let data = JSON.parse(localStorage.getItem('Basket'))
        console.log(data)
        let filteredData = {...data,cardToBasket: data.cardToBasket.filter(elem=>elem.item.id!==id)}
       
        localStorage.setItem('Basket',JSON.stringify(filteredData))
        getProductsFromBasket()
    }

    // console.log(cart.cardToBasket)
    return (
    <div className='container'>
        <div className='cart'>
        {cart.cardToBasket?(
        <div>
            <table className='cart_table'>
                <thead>
                <tr>
                    <th>image</th>
                    {/* <th>Title</th> */}
                    {/* <th>Price</th> */}
                    <th>CountSmall</th>
                    <th>CountLarge</th>
                    <th>small</th>
                    <th>large</th>
                    <th>SubPrice</th>
                    <th>delete</th>
                </tr>
                </thead>
                <tbody className='card_cart'>
                    {cart.cardToBasket.map(elem=>(

              <tr className='card_cart_tr' key={elem.item.id}>
              <td>
                <img className='cart_image' src={elem.item.image} alt="product img" />
                <h2>{elem.item.Pname}</h2>
              </td>
              <td>
                <input value={elem.countSmall} type="number" onChange ={(e)=> changeSmallProductCount(e.target.value,elem.item.id)}/>
              </td>
              <td>
                <input value={elem.countLarge} type="number" onChange ={(e)=> changeLargeProductCount(e.target.value,elem.item.id)}/>
              </td>
              <td>{elem.subPriceSmall}</td>
              <td>{elem.subPriceLarge}</td>
              <td>{elem.subPrice}</td>
              <td><button onClick={()=>deleteFromBasket(elem.item.id)}>Xdd</button></td>
        </tr>

                    ))}
                   
                </tbody>
            </table>
            <h4>Total: {cart.totalPrice}</h4>
            <button>Купить</button>
        </div>
        ):  (<CircularProgress/>)}
    </div>
    </div>
    
    );
};

export default Cart;