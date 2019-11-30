import React from 'react';
import CakesList from './cakes/CakesList'


import 'semantic-ui-css/semantic.min.css'
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>NoProblem App</h1>
      <h2>Lista ciast bez filtrów</h2>
     
      <CakesList/>

    </div>
  );
}

export default App;
