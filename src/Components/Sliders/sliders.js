import React from 'react';
import './slider.css';



function sliders(){
    return(

<div className='slider'>
            <h1>Available Properties</h1>
                 <hr></hr>
        <div className='sameline'>
            <div id="carouselExampleControls" class="carousel slide w-25 h-50 pl-5" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="https://cdn.vox-cdn.com/thumbor/0__zWQZmmmwHA5OjBTAchz6_sBw=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/62922957/4854_Alonzo_Ave__Encino_FInals_34.0.jpg" class="d-block w-100" alt="house"/>
                        </div>
                        <div class="carousel-item">
                        <img src="https://images.estately.net/89_DW18050064_0_1520146867_636x435.jpg" class="d-block w-100" alt="house"/>
                        </div>
                        <div class="carousel-item">
                        <img src="https://images.estately.net/89_DW18050064_0_1520146867_636x435.jpg" class="d-block w-100" alt="house"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </div>

                    </div>

                    
     </div>



    );


}

export default sliders;