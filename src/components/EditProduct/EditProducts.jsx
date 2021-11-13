import React, { useContext, useState } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import './EditProducts.css'

const EditProducts = ({elem,openModal,setOpenModal}) => {
    const [editedProduct,setEditedProduct] = useState({})
    const {saveEditedProduct} = useContext(productsContext)


    function editProduct(elem){
    setEditedProduct({...editedProduct,id: elem.id})
    console.log(editedProduct)
    saveEditedProduct(editedProduct,elem.id)
    }
    return (
        <>
        <div className='bg_modal' onClick={()=>setOpenModal(!openModal)}></div>
        <div className='bg_edit_product'>
        <div className='container'>
        <div className='edit_product '>
        <div><input onChange={(e)=>setEditedProduct({...editedProduct,product: e.target.value})} list='data' type="text" />
            <datalist id='data'>
                <option value="pizza"></option>
                <option value="sushi"></option>
                <option value="drinks"></option>
                <option value="sous"></option>
                <option value=""></option>
                <option value=""></option>
            </datalist>
            </div>
            <div><input value={elem.Pname} onChange={(e)=>setEditedProduct({...editedProduct,Pname: e.target.value})} type="text" /><label>pizza name</label></div>
            <div><input value={elem.image} onChange={(e)=>setEditedProduct({...editedProduct,image: e.target.value})} type="text" /><label>image</label></div>
            <div><input value={elem.about} onChange={(e)=>setEditedProduct({...editedProduct,about: e.target.value})} type="text" /><label>about</label></div>
            <div><input value={elem.priceSmall} onChange={(e)=>setEditedProduct({...editedProduct,priceSmall: e.target.value})} type="text" /><label>price small</label></div>
            <div><input value={elem.priceLarge} onChange={(e)=>setEditedProduct({...editedProduct,priceLarge: e.target.value})} type="text" /><label>price large</label></div>
            <button className='btn_save' onClick={(e)=>editProduct(elem)}>save</button>  
        </div>
        </div>
        </div>
        
        </>
    );
};

export default EditProducts;