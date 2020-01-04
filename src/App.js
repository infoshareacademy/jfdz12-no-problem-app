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

    this.setState({
             isLoading: true,
             isError: false,
         }, () =>{
          const waitingData = setInterval(()=>{
            const data = dataManager.getUsers();
            const data2 = dataManager.getCooks();
            const data3 = dataManager.getTypes();

            let i=0;
            if (data.length > 0 && data2.length > 0 && data3.length>0){
                this.setState ({
                  isLoading: false, 
                })
                clearInterval(waitingData)
                console.log('App.js -> załadowane', data, data2, data3)
              } else {
                console.log('czekam', i++ )
              }
            }, 10)
         }) 
  }
  

  setAuth = () => {
    this.setState(prevState =>({
        auth: !prevState.auth,
    }))
  };
    
  render(){
    const { isLoading, isError, error } = this.state;

    return (
      <div>

        { !isLoading &&
    
            <BrowserRouter>
              <MenuAppBar setAuth={this.setAuth} auth={this.state.auth}/>
              <div className="App">  
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/userAccount' component={User} />
                <Route exact path='/userAccount/user/:id' component={UserCard}/>
                <Route path='/cakes' component={CakesList} />
                <Route path='/cooks' component={CooksList} />
                <Route path='/addCake' component={AddCake} />
              </div>    
            </BrowserRouter>
          }
          
        {isLoading && <CircularProgress color="secondary" />}

        {isError && <div> {error} </div> }

      </div>
    );
  }
}

export default App;
