import React from 'react';
import './Navigation.css';




function Navigation() {
  return (
    <div className="Navigation">
   		 <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
				<img class='grow pl-5 pr-5 pointer'src='https://static.wixstatic.com/media/f80a8a_95360b9c0b9b40e4bfa1c0da56b82b8c~mv2.jpg/v1/fill/w_189,h_129,al_c,q_80,usm_0.66_1.00_0.01/logo%202.webp' alt='logo' href='http://ourspacenow.herokuapp.com/'/>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>

			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul class="navbar-nav mr-auto">
			      <li class="nav-item active">
						<button type="button" class="btn btn-light pl-3 pr-3" href="http://ourspacenow.herokuapp.com/"><h5>Home</h5></button>
			      </li>
			      <li class="nav-item">
						<button type="button" class="btn btn-light pl-3 pr-3" href="http://ourspacenow.herokuapp.com/"><h5>Register/SignUp</h5></button>
			      </li>
            <li class="nav-item">
						<button type="button" class="btn btn-light pl-3 pr-3" href="http://ourspacenow.herokuapp.com/"><h5>Search For Space</h5></button>
			      </li>
            <li class="nav-item">
						<button type="button" class="btn btn-light pl-3 pr-3" href="http://ourspacenow.herokuapp.com/"><h5>Post My Space</h5></button>
			      </li>
						<li class="nav-item">
						<button type="button" class="btn btn-light pl-3 pr-3" href="http://ourspacenow.herokuapp.com/"><h5>Contact Us</h5></button>
			      </li>

			    </ul>
			    <form class="form-inline my-2 my-lg-0 dim">
			    </form>
			  </div>
	</nav>

     
    </div>
  );
}

export default Navigation;
