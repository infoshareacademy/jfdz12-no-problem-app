import React from 'react';
import {CakesList} from './cakes/CakesList'
import MenuAppBar from './menu/MenuAppBar'
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Dashboard from './dashboard/Dashboard'
import CooksList from './cooks/CooksList'
import AddCake from './cakes/AddCake'
import UserAccount from'./user/UserAccount'
import { BrowserRouter, Route } from 'react-router-dom';


class App extends React.Component {
  render(){
   
    return (
      <BrowserRouter>
        <div className="App">
          <MenuAppBar/>
          <div style ={{paddingTop:'75px'}}>
            <Route exact path='/' component={Dashboard} />
            <Route path='/userAccount' component={UserAccount} />
            <Route path='/cakes' component={CakesList} />
            <Route path='/cooks' component={CooksList} />
            <Route path='/addCake' component={AddCake} />
          </div>
    
        </div>
      </BrowserRouter>
    );

  }
}

export default App;
