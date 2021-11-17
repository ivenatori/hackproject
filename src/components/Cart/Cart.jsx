import { CircularProgress } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            <div className='cart_table'>
                {/* <div className='thead'>
                   <div className='cart_block'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='cart_block'>
                         <div>CountSmall</div>
                         <div>CountLarge</div>
                    </div>
                    <div className='cart_block'>
                        <div>small</div>
                        <div>large</div>
                        <div>SubPrice</div>
                        <div>delete</div>
                    </div>
                
                </div> */}
                <div className='card_cart'>
                    {cart.cardToBasket.map(elem=>(

         <div className='thead' key={elem.item.id}>
            <div className='cart_block'> 
                <div className='img-cart'>
                    <img className='cart_image' src={elem.item.image} alt="product img" />
                
                </div>
                <div>
                    <h2>{elem.item.Pname}</h2>
                </div>
            </div>
            <div className='cart_block'>
                <div>
                    <span>count small</span><br />
                    <input value={elem.countSmall} type="number" onChange ={(e)=> changeSmallProductCount(e.target.value,elem.item.id)}/>
                </div>
                <div>
                <span>count large</span><br />
                     <input value={elem.countLarge} type="number" onChange ={(e)=> changeLargeProductCount(e.target.value,elem.item.id)}/>
                 </div>
            </div>

            <div className='cart_block'>           
              <div>{elem.subPriceSmall}  <br /><span>small</span></div>
              <div>{elem.subPriceLarge}  <br /><span>large</span></div>
              <div>{elem.subPrice}       <br /><span>sum</span></div>
              <div><button className='btn_delete_cart' onClick={()=>deleteFromBasket(elem.item.id)}>X</button></div>
            </div>                
        </div>

                    ))}
                   
                </div>
            </div>
            <h4 className='total_price'>Total: {cart.totalPrice}</h4>
           <Link  className='a_buy' to="/form"> <button className='btn_buy'>Купить</button></Link>
        </div>
        ):  (<CircularProgress/>)}
    </div>
</div>
    
    );
};

export default Cart;