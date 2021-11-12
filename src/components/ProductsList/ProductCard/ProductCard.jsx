import React from 'react';

const ProductCard = () => {
    return (
        <div className='product_card'>
            <div className='pizza_image'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-CBujvGP3Q_bJGiTfffbZaUPi0PzsW8LJ_A&usqp=CAU" alt="" /></div>
            <div className='pizza_name'>pizza name</div>
            <div className='pizza_about'>about pizza</div>
            <div className='pizza_size'>
                <button>large</button><button>small</button>
            </div>
            <div className='pizza_price'></div>
        </div>
    );
};

export default ProductCard;