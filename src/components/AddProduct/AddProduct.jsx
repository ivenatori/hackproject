import React, { useContext, useState } from 'react';
import { productsContext } from '../../contexts/ProductsContext';

const AddProduct = () => {
    const {addNewProduct} = useContext(productsContext)
    const [product,setProduct]=useState({})

    function addProduct(){
        addNewProduct(product)
    }

    return (
        <div className='add_product container'>
            <div><input onChange={(e)=>setProduct({...product,Pname: e.target.value})} type="text" />name</div>
            <div><input onChange={(e)=>setProduct({...product,image: e.target.value})} type="text" />image</div>
            <div><input onChange={(e)=>setProduct({...product,about: e.target.value})} type="text" />about</div>
            <div><input onChange={(e)=>setProduct({...product,priceSmall: e.target.value})} type="text" />price small</div>
            <div><input onChange={(e)=>setProduct({...product,priceLarge: e.target.value})} type="text" />price large</div>
            <button onClick={addProduct}>add</button>  
        </div>
    );
};

export default AddProduct;