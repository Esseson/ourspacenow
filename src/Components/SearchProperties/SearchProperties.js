import React from 'react';
import './search.css';



function SearchProperties(){

    return(

        <div class='search pt-5'>
            <h1> Welcome to OurSpaceNow.</h1>
            <h3>Search for Properties around you.</h3>

                <div class='searchbar'>
                        <form class="form-inline pt-5 justify-content-center">
                                <label class="sr-only" for="inlineFormInputName2">Name</label>
                                <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Find Apartments in.."/>
                                <label class="sr-only" for="inlineFormInputName2">Name</label>
                                <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Any Price"/>
                                <label class="sr-only" for="inlineFormInputName2">Name</label>
                                <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="All Beds"/>

                                <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
                                <div class="input-group mb-2 mr-sm-2">
                                    <div class="input-group-prepend">
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-primary mb-2">Search</button>
                        </form>


             </div>
 </div>





   );

} 
export default SearchProperties;