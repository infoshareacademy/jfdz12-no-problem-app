import React from 'react';
import {CakesList} from './cakes/CakesList'
import MenuAppBar from './menu/MenuAppBar'
import './App.css';
import Dashboard from './dashboard/Dashboard'
import CooksList from './cooks/CooksList'
import AddCake from './cakes/AddCake'
import { BrowserRouter, Route } from 'react-router-dom';
import {User} from './user/User'


class App extends React.Component {
  render(){
   
    return (
      <div className="App">
        
        <BrowserRouter>
            <MenuAppBar/>
            <div style ={{paddingTop:'75px'}}>
              <Route exact path='/' component={Dashboard} />
              <Route path='/user' component={User} />
              <Route path='/cakes' component={CakesList} />
              <Route path='/cooks' component={CooksList} />
              <Route path='/addCake' component={AddCake} />
            </div>
      
        </BrowserRouter>
      </div>
    );

  }
}

export default App;
