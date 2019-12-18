import React from 'react';
import {CakesList} from './cakes/CakesList'
import {Menu} from './menu/Menu'

import 'semantic-ui-css/semantic.min.css'
import './App.css';


function App() {
  return (
    <div className="App">
      <Menu/>
     
      <CakesList/>

    </div>
  );
}

export default App;
