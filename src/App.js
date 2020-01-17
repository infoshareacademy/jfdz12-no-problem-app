import React from 'react';
import { CircularProgress, } from '@material-ui/core';
import { CakesList } from './cakes/CakesList';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import CooksList from './cooks/CooksList';
import { BrowserRouter, Route } from 'react-router-dom';
import MenuAppBar from './menu/resMenu/MenuAppBar';
import UserCard from './user/UserCard';
import SignIn from './user/SignIn';
import SignOn from './user/SignOn';
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
      cakes:[],
      cooks:[],
    };
   
  }

  componentDidMount(){
   
    fetch('./cakes.json')
        .then (res => res.json())
        .then (data => {this.setState({cakes: data})})
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
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
              <Route exact path='/'>
                <Dashboard cakes={this.state.cakes} cooks={this.state.cooks} />
              </Route>
              <Route path='/userCard' component={UserCard} />
              <Route path='/cakes' component={CakesList} />
              <Route path='/cakeAdd/:id' component={CakeAddForm} />
              <Route path='/cake/:id' component={CakeCardFull} />
              <Route path='/cooks' component={CooksList} />
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
