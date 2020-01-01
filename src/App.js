import React from 'react';
import {CakesList} from './cakes/CakesList';
import {Menu} from './menu/Menu';
import {User} from './user/User';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Grid, Button } from '@material-ui/core';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      filterVisibility: false,
      openCakeList: false,
      openUser: false,

    }
    this.handleFilterVisibility = this.handleFilterVisibility.bind(this);
  }
  
  handleFilterVisibility (){
    this.setState( prevState => ({
        filterVisibility: !prevState.filterVisibility,
        })
    )
  }

  handleOpen(value) {
    const name = value === 'user' ? 'openUser' : 'openCakeList';
    this.setState(prevState => ({
      [name]: !prevState[name], 
    }))
  }

  render(){
    const {openUser, openCakeList} = this.state;

    return (
      <div className="App">
        <Grid>
          <Menu
            filterVisibility = {this.state.filterVisibility}
            onHandleFilterVisibility = {this.handleFilterVisibility}
          />

          <Grid>
            <Button onClick={() => this.handleOpen('user')} variant='outlined' style={{margin: '10px'}}>
              { openUser ? 'ukryj użytkownika' : 'pokaż użytkownika' } 
            </Button>
            <Button onClick={() => this.handleOpen('cake')} variant='outlined' style={{margin: '10px'}}>
              { openUser ? 'ukryj  listę ciast' : 'pokaż listę ciast' }
            </Button>
          </Grid>

          {openCakeList && 
            <CakesList
              filterVisibility = {this.state.filterVisibility}
            />
          }
        
          {openUser && <User />}

        </Grid>
       
  
      </div>
    );

  }
}

export default App;
