import React from 'react';
import './search.css';



function SearchProperties(){

    return(
 <div>
        {/* <div class='About pt-5 container'>

                <div class='strong row'>
            <h1> <strong>About Our SpaceNow </strong> </h1>
                        </div>

                    <div class='content m-5 col-sm'>
                        <h5>Our Space Now is the place to find your future business space. 
                        <p></p>
                        Unlike the giants in commercial space ads, OurSpaceNow.com caters<p></p>
                        to the small owners, agents and managers who make up a major <p></p>
                        part of the Retail/Office space rentals. 
                        Our low cost ads will allow for more<p></p>
                        options to post ads and thus lower start up costs for tenants.
                        <p></p>
                        Join today and find the future home for your business.
                        </h5>
                        <div class='col'>
                        <h1>let's see</h1> */}


                        <div class="container">
                        <div class="row">
                            <div class="col-xl">
                            <div>
                            <h1> <strong>About Our SpaceNow </strong> </h1>
                                 </div>
                        <h5>Our Space Now is the place to find your future business space. 
                        <p></p>
                        Unlike the giants in commercial space ads, OurSpaceNow.com caters<p></p>
                        to the small owners, agents and managers who make up a major <p></p>
                        part of the Retail/Office space rentals. 
                        Our low cost ads will allow for more<p></p>
                        options to post ads and thus lower start up costs for tenants.
                        <p></p>
                        Join today and find the future home for your business.
                        </h5>

                            </div>
                            <div class="col-sm">

                            <div class="d-flex justify-content-end pt-3 pointer">
                             <img src="https://s3-media3.fl.yelpcdn.com/bphoto/1GTD102Qdrd4qT9xV0k25w/ls.jpg" alt="adverts" height="300" width="300" />
                                 </div>

                                 <div class="d-flex justify-content-end pt-3 pointer">
                                 <img src="https://yt3.ggpht.com/a/AGF-l7-tTmIMiRKwzhSuJD5f_hN2LjN7fLs4PEtwCg=s900-mo-c-c0xffffffff-rj-k-no" alt="adverts" height="300" width="300" />
                                    </div>

                                    <div class="d-flex justify-content-end pt-3 pointer">
                                 <img src="data:image/jpeg;base64,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" alt="adverts" height="300" width="300" />
                                    </div>  
                      
                                     <div class="d-flex justify-content-end pt-3 pointer">
                         <img src="http://www.androidguys.com/wp-content/uploads/2011/03/monster.jpg" alt="adverts" height="300" width="300" />
                                     </div>

                            </div>
                        </div>
                        </div>

                        {/* </div>
                    </div>
                 </div> */}
           
            

 </div>

                       

 





   );

} 
export default SearchProperties;