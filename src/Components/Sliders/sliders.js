import React from 'react';
import Carousel from'./carousel';
import './slider.css';



function sliders(){
    return(

<div className='slider float-left pl-5 pb-5 pr-5'>
                    <div class='pt-5 mt-5 mb-5'>
                <h1>Available Properties</h1>
                    </div>
                 <div></div>

                 <div class='carol d-flex pb-5 pt-5'>
                    <Carousel/>
                    <Carousel />
                    <Carousel />
                    <Carousel />
                    <Carousel />
                    <Carousel />
                    </div>

                    <div class='carol d-flex pb-5'>
                    <Carousel/>
                    <Carousel />
                    <Carousel />
                    <Carousel />
                    <Carousel />
                    <Carousel />
                    </div>

                

 </div>



    );


}

export default sliders;