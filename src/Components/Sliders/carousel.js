import React from 'react';



function carousel(){
    return(

        <div class="card pointer" style={{ width:"18rem", height:'18rem', display:"inline-block", padding:"10px 20px" }} pl-5>
        <div class="card-body">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://s-ec.bstatic.com/xdata/images/hotel/max500/135937255.jpg?k=06ee74102a509031a8602bbf08d84135c90064c2b7dfc11b63a5177965096f54&o=" class="d-block w-100" alt="House Obj"/>
                </div>
                <div class="carousel-item">
                <img src="https://luxport.s3.amazonaws.com/18503/795%2BFifth%2BAvenue%2BNew%2BYork%2BNY%2BUSA%2B547080_001_S.jpg" class="d-block w-100" alt="house Obj"/>
                </div>
                <div class="carousel-item">
                <img src="http://freshome.site/wp-content/uploads/2018/03/New-York-Manhattan-Luxury-Apartments-For-Sale.jpeg" class="d-block w-100" alt="house obj"/>
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
          <h5 class="card-title"> $3000 </h5>
          <p class="card-text">123 Broad Street, <br></br>
          New York.
          </p>
        </div>
      </div>
      
);

}

export default carousel;
