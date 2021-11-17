import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './MainCarousel.css'

const MainCarousel = () => {
    return (
        <div className="MyCarousel">
        <Carousel autoPlay showThumbs={false}>
           <div>
               <img className="firstP" src={'https://i.ibb.co/0Fjhkn0/goods.jpg'} alt="pizza"/>
               </div>
            <div>
               <img className="secondP" src={'https://i.ibb.co/k4mr3x7/Facebook-1200x628-1.jpg'} alt="pizza"/>
            </div> 
            <div>
               <img className="thirdP" src={'https://i.ibb.co/3RbgCH8/Facebook-1200x628.jpg'} alt="pizza"/>
             </div> 
        </Carousel>
        </div>
    );
};

export default MainCarousel;