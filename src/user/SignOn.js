import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default class SignOn extends Component {
    render() {
        return (
            <div style={{paddingTop: '100px'}}>
               <h1> Możliwość rejestracji już wkrótce! </h1>
               <Link to='/'>
               <Button color="secondary">Strona główna</Button>
               </Link>
            </div>
        )
    }
}
