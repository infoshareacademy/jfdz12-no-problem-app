import React from 'react';
import { CircularProgress, } from '@material-ui/core';
import { CakesList } from './cakes/CakesList';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import CooksList from './cooks/CooksList';
import AddCake from './cakes/AddCake';
import { BrowserRouter, Route } from 'react-router-dom';
import MenuAppBar from './menu/resMenu/MenuAppBar';
import { UserCard } from './user/UserCard';
import SignIn from './user/SignIn';
import CakeAddForm from './cakes/CakeAddForm/CakeAddForm';
import CakeCardFull from './cakes/CakeCardFull';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      auth: false,
      userId: '',
      isLoading: false,
      isError:false,
      error:'',
    };
  }
  
  setAuth = () => {
    this.setState(prevState =>({
        auth: !prevState.auth,
    }))
  };
    
  render(){
    const { isLoading, isError, error, auth } = this.state;

    if (!isLoading && !isError){
      return (
        <div className="App">
          <BrowserRouter>
            <MenuAppBar setAuth={this.setAuth} 
                        auth={auth}
            />
              <Route exact path='/' component={Dashboard} />
              <Route path='/oneuser' component={UserCard} />
              <Route path='/cakes' component={CakesList} />
              <Route path='/cakesAdd/:id' component={CakeAddForm} />
              <Route path='/cake/:id' component={CakeCardFull} />
              <Route path='/cooks' component={CooksList} />
              <Route path='/addCake' component={AddCake} />
              <Route path='/SignIn' component={SignIn} />
          </BrowserRouter>
        </div>
      )}
    
    if(isLoading && !isError) {
      return (
        <div className="App">
          <CircularProgress color="secondary" />
        </div>
      )
    }
    
    if(isError) { return (
      <div className="App"> {error} </div>
      )} 
  
  }
}

export default App;
