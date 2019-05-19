import React,{ Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from '../src/Components/Navigation/Navigation'
import SearchProperties from '../src/Components/SearchProperties/SearchProperties'






const particlesOptions = {
particles: {
number: {
  value: 100,
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

          </div>

      );
  };

}

  


export default App;
