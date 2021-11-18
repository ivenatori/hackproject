import React, { useContext, useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { productsContext } from '../../contexts/ProductsContext';
import './Recalls.css'
import UserRecall from './UserRecall';


const Recalls = () => {
const {sendRecall,getRecalls,recalls} = useContext(productsContext)
const [recall,setRecall] = useState('')

const {user} = useAuth()
console.log(user.email)
function createRecall(){
    let newRecall={
        user: user.email,
        message: recall,
    }
    sendRecall(newRecall)
    getRecalls()
}
useEffect(()=>{
    getRecalls()
},[])
    return (
        <div className='recalls'>
            <div className='container'>
                <div className='recalls_content'>
                    <div className='users_recalls'>
                        {recalls.map(elem=>(
                            <UserRecall key={elem.id*8} elem={elem}/>
                        ))}
                    </div>
                    <div className='send_recalls'>
                        <input onChange={(e)=>setRecall(e.target.value)} type="text" placeholder='отавить отзыв'/>
                        <button onClick={createRecall}>отправить</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Recalls;