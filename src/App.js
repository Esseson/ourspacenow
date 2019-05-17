import React,{ Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from '../src/Components/Navigation/Navigation'
import SearchProperties from '../src/Components/SearchProperties/SearchProperties'
import Sliders from '../src/Components/Sliders/sliders';
import PayPerClick from '../src/Components/PayPerClick/PayPerClick';
import TopCities from '../src/Components/TopCities/TopCities';
import Footer from '../src/Components/Footer/Footer';
import TrendingCities from '../src/Components/TrendingCities/TrendingCities';





const particlesOptions = {
particles: {
number: {
  value: 30,
  density: {
    enable: true,
    value_area: 1000
  }
}
}
}

class App extends Component{
  render(){
      return (
          <div className="App">
             <Particles className= "particles"
                params={particlesOptions} 
                   />
              <Navigation />
              <SearchProperties />
              <Sliders />
              <PayPerClick />
                <hr>
                </hr>
         <TrendingCities />
         <hr></hr>
          <TopCities />
          <Footer />
          </div>

      );
  };

}

  


export default App;
