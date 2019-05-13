import React,{ Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from '../src/Components/Navigation/Navigation'
import SearchProperties from '../src/Components/SearchProperties/SearchProperties'
import Sliders from '../src/Components/Sliders/sliders';


const particlesOptions = {
particles: {
number: {
  value: 30,
  density: {
    enable: true,
    color: '#808080',
    value_area: 800
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
          </div>
  

      );
  };

}

  


export default App;
