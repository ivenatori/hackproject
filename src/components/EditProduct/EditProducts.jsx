import React, { useContext, useState } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import './EditProducts.css'

const EditProducts = ({elem,openModal,setOpenModal}) => {
    const [editedProduct,setEditedProduct] = useState(elem)
    const {saveEditedProduct} = useContext(productsContext)


    function editProduct(elem){
    setEditedProduct({...editedProduct,id: elem.id})
    console.log(editedProduct)
    saveEditedProduct(editedProduct,elem.id)
    // document.querySelector('body').style.overflow='hidden'
    }
    return (
        <>
        <div className='bg_modal' onClick={()=>setOpenModal(!openModal)}></div>
        <div className='bg_edit_product'>
        <div className='container'>
        <div className='edit_product '>
        <div><input placeholder='выбрать товар' onChange={(e)=>setEditedProduct({...editedProduct,product: e.target.value})} list='data' type="text" />
            <datalist id='data'>
                <option value="пицца"></option>
                <option value="роллы"></option>
                <option value="напитки"></option>
                <option value="соусы"></option>
                <option value=""></option>
                <option value=""></option>
            </datalist>
            </div>
            <div className='inp_block'><input value={editedProduct.Pname} onChange={(e)=>setEditedProduct({...editedProduct,Pname: e.target.value})} type="text" /><label>pizza name</label></div>
            <div className='inp_block'><input value={editedProduct.image} onChange={(e)=>setEditedProduct({...editedProduct,image: e.target.value})} type="text" /><label>image</label></div>
            <div className='inp_block'><input value={editedProduct.about} onChange={(e)=>setEditedProduct({...editedProduct,about: e.target.value})} type="text" /><label>about</label></div>
            <div className='inp_block'><input value={editedProduct.priceSmall} onChange={(e)=>setEditedProduct({...editedProduct,priceSmall: e.target.value})} type="text" /><label>price small</label></div>
            <div className='inp_block'><input value={editedProduct.priceLarge} onChange={(e)=>setEditedProduct({...editedProduct,priceLarge: e.target.value})} type="text" /><label>price large</label></div>
            <button className='btn_save' onClick={(e)=>editProduct(elem)}>save</button>  
        </div>
        </div>
        </div>
        
        </>
    );
};

export default EditProducts;