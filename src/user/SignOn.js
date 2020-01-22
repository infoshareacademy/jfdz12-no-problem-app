import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

export default class SignOn extends Component {
    render() {
        return (
            <PageWrapper>
               <h1> Możliwość rejestracji już wkrótce! </h1>
               <Link to='/' style={{textDecoration: 'none'}}>
               <Button color="secondary">Strona główna</Button>
               </Link>

            </PageWrapper>
        )
    }
}
