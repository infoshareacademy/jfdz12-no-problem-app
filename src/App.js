import React from 'react';
import { CircularProgress, } from '@material-ui/core';
import { CakesList } from './cakes/CakesList';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import CooksList from './cooks/CooksList';
import AddCake from './cakes/AddCake';
import { BrowserRouter, Route } from 'react-router-dom';
import MenuAppBar from './menu/resMenu/MenuAppBar';
import { User } from './user/User';
import { UserCard } from './user/UserCard';
import { dataManager } from './api/Api';
import SignIn from './user/SignIn';
import SignOn from './user/SignOn';
import CakeAddForm from './cakes/CakeAddForm/CakeAddForm';



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
      styleColor: {backgroundColor:'rgba(255,255,255, 0.3)'}
    };
   
  }


  componentDidMount(){
    window.onscroll = () => {
      this.setState({
        styleColor:{backgroundColor:'white'}
      }); 
      if (window.pageYOffset===0) {
        this.setState({
          styleColor:{backgroundColor:'rgba(255,255,255, 0.3)'}}
          )
      }
    };
    

    let i=0;
    fetch('./cakes.json')
        .then (res => res.json())
        .then (data => {this.setState({cakes: data})})
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
    
    this.setState({
             isLoading: true,
             isError: false,
         }, () =>{
          const waitingData = setInterval(()=>{
            const data = dataManager.getUsers();
            
            const data2 = dataManager.getCooks();
            const data3 = dataManager.getTypes();
            const data4 = dataManager.getLikes();
            
            if (data.length > 0 && data2.length > 0 && data3.length>0 && data4.length>0){
                this.setState ({
                  isLoading: false, 
                  cooks: data2
                 
                })
                clearInterval(waitingData)
                console.log('App.js -> załadowane')
                console.log(this.state)
              } else {
                i++;
                console.log('czekam', i );
                if (i>20){
                  clearInterval(waitingData);
                  this.setState({
                    isError: true,
                    error: 'nie mogę pobrać danych!!',
                    isLoading: false,
                  })
                }
              }
            }, 100)
         }) 
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
        <BrowserRouter>
          <MenuAppBar setAuth={this.setAuth} 
                      auth={auth}
                     styleColor={this.state.styleColor}
          />
          <div className="App">  
            <Route exact path='/'>
              <Dashboard cakes={this.state.cakes} cooks={this.state.cooks} />
            </Route> 
            <Route path='/userAccount' component={User} />
            <Route path='/oneuser' component={UserCard} />
            <Route path='/cakes' component={CakesList} />
            <Route path='/cakesAdd/:id' component={CakeAddForm} />
            <Route path='/cooks' component={CooksList} />
            <Route path='/addCake' component={AddCake} />
            <Route path='/SignIn' component={SignIn} />
            <Route path='/SignOn' component={SignOn} />
            
          </div>    
        </BrowserRouter>
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
