import React from 'react';
import {CakesList} from './cakes/CakesList'
import {Menu} from './menu/Menu'
import 'semantic-ui-css/semantic.min.css'
import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      filterVisibility: false,
    }
    this.handleFilterVisibility = this.handleFilterVisibility.bind(this);
  }
  
  handleFilterVisibility (){
    this.setState( prevState => ({
        filterVisibility: !prevState.filterVisibility,
        })
    )
  }

  render(){
    return (
      <div className="App">
        <Menu
          filterVisibility = {this.state.filterVisibility}
          onHandleFilterVisibility = {this.handleFilterVisibility}
        />
       
        <CakesList
          filterVisibility = {this.state.filterVisibility}
        />
  
      </div>
    );

  }
}

export default App;
