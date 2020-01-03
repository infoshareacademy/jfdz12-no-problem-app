import React from 'react';
import {CakesList} from './cakes/CakesList'
import MenuAppBar from './menu/MenuAppBar'
import './App.css';
import Dashboard from './dashboard/Dashboard'
import CooksList from './cooks/CooksList'
import AddCake from './cakes/AddCake'
import { BrowserRouter, Route } from 'react-router-dom';
import {User} from './user/User'
import MenuAppBar from './menu/resMenu/MenuAppBar'


class App extends React.Component {
  state = {
    auth: false
  };

  setAuth = () => {
    if (this.state.auth === false) {
      this.setState({
           auth: true
      })} else {
        this.setState({
          auth: false
      })}
    };
    
  render(){
   
    return (
      <BrowserRouter>
        <div className="App">
          <MenuAppBar setAuth={this.setAuth} auth={this.state.auth}/>
          <Route exact path='/' component={Dashboard} />
          <Route path='/user' component={UserAccount} />
          <Route path='/cakes' component={CakesList} />
          <Route path='/cooks' component={CooksList} />
          <Route path='/addCake' component={AddCake} />
        </div>
      </BrowserRouter>
    );

  }
}

export default App;
