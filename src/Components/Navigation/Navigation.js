import React from 'react';
import './Navigation.css';




function Navigation() {
  return (
    <div className="Navigation shadow-3 ma-3">
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-3">
			  <a class="navbar-brand grow" href="http://ourspacenow.herokuapp.com/">OurSpaceNow</a>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>

			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul class="navbar-nav mr-auto">
			      <li class="nav-item active">
			        <a class="nav-link grow" href="http://ourspacenow.herokuapp.com/">Apartment <span class="sr-only">(current)</span></a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link grow" href="http://ourspacenow.herokuapp.com/">Houses</a>
			      </li>
                  <li class="nav-item">
			        <a class="nav-link grow" href="http://ourspacenow.herokuapp.com/">Favorites</a>
			      </li>
                  <li class="nav-item">
			        <a class="nav-link grow" href="http://ourspacenow.herokuapp.com/">Alerts</a>
			      </li>

			    </ul>
			    <form class="form-inline my-2 my-lg-0 dim">
						<a class='SignUp' href="https://ourspacenow.herokuapp.com">SignUp / Login</a>
			    </form>
			  </div>
	</nav>

     
    </div>
  );
}

export default Navigation;
