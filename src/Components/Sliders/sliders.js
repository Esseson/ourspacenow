import React from 'react';
import Carousel from'./carousel';
import './slider.css';



function sliders(){
    return(

<div className='slider'>
            <h1>Available Properties</h1>
                 <hr></hr>
                <div>
                    <Carousel class="cards pl-5 pr-5"/>
                    <Carousel class="cards pl-5 pr-5"/>
                    <Carousel class="cards pl-5 pr-5"/>
                    <Carousel class="cards pl-5 pr-5"/>

                </div>
 </div>



    );


}

export default sliders;