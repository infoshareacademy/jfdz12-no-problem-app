import React from 'react';
import { CircularProgress, } from '@material-ui/core'
import { CakesList } from './cakes/CakesList';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import CooksList from './cooks/CooksList';
import AddCake from './cakes/AddCake';
import { BrowserRouter, Route, } from 'react-router-dom';
import MenuAppBar from './menu/resMenu/MenuAppBar';
import { User } from './user/User'
import { UserCard } from './user/UserCard'
import { dataManager } from './api/Api'
import { SignIn } from './user/SignIn';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      auth: false,
      isLoading: false,
      isError:false,
      error:'',
    };
  }

  componentDidMount(){
    let i=0;
    this.setState({
             isLoading: true,
             isError: false,
         }, () =>{
          const waitingData = setInterval(()=>{
            const data = dataManager.getUsers();
            const data2 = dataManager.getCooks();
            const data3 = dataManager.getTypes();
            
            if (data.length > 0 && data2.length > 0 && data3.length>0){
                this.setState ({
                  isLoading: false, 
                })
                clearInterval(waitingData)
                console.log('App.js -> załadowane')
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
    const { isLoading, isError, error } = this.state;

    if (!isLoading && !isError){
      return (
      <BrowserRouter>
              <MenuAppBar setAuth={this.setAuth} auth={this.state.auth}/>
              <div className="App">  
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/userAccount' component={User} />
                <Route exact path='/userAccount/user/:id' component={UserCard}/>
                <Route path='/cakes' component={CakesList} />
                <Route path='/cooks' component={CooksList} />
                <Route path='/addCake' component={AddCake} />
                <Route path='/SignIn' component={SignIn} />
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
