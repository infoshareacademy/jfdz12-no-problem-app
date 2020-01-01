import React from 'react';
import {CakesList} from './cakes/CakesList'
import MenuAppBar from './menu/MenuAppBar'
import 'semantic-ui-css/semantic.min.css'
import './App.css';


class App extends React.Component {
 
  


  render(){
    return (
      <div className="App">
        <MenuAppBar/>
       
        <CakesList         
        />
  
      </div>
    );

  }
}

export default App;
