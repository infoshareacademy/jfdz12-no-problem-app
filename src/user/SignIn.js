import React from 'react';
import {Grid, Link, Typography, Container, Avatar, Dialog, Button, TextField, FormControlLabel, Checkbox} from '@material-ui/core';
import './SignIn.css';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import UserSelect from './UserSelect';
import { dataManager } from '../api/Api'
import {Link as Rlink} from 'react-router-dom';

export class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.users = dataManager.getUsers(); 
        this.state = {
            openSignIn: true,
            userId: '',
        };
    }
 
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        })
    }

    handleClose = () =>{
        const {userId} = this.state;
        sessionStorage.setItem('userId', userId);
        this.setState({
            userId: '',
            openSignIn: false,
        })
    }

    render(){
        const { openSignIn, userId } = this.state;
 
        return (
            <div>
                <Dialog
                    open={openSignIn}
                >
                    <Container component="main" width="xs" style={{padding:'0px'}}>
                        <div className={'paper'}>
                            <Avatar className = {'avatar'}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Wpisz email
                            </Typography>
                            <form className={'form'} >
                            <UserSelect 
                                options = {this.users}
                                name = {'userId'}
                                value = {userId}
                                autoFocus
                                onHandleChange = {this.handleChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                disabled
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                // required
                                fullWidth
                                name="password"
                                label="Hasło"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                disabled
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Zapametaj"
                                disabled
                            />
                            <Button
                                fullWidth
                                name='userId'
                                variant="contained"
                                color="primary"
                                className={'submit'}
                                component = {Rlink} to={'/'}
                                onClick = {this.handleClose}
                            >
                                Zaloguj
                            </Button>
                            
                            <Grid container >
                                <Grid item xs >
                                <Link href="#" variant="body2">
                                    Zapomniałeś hasła?
                                </Link>
                                </Grid>
                                <Grid item>
                                <Link href="#" variant="body2">
                                    {"Nie masz konta? zarejestruj się"}
                                </Link>
                                </Grid>
                            </Grid>
                            </form>
                        </div>
                    </Container>
                </Dialog>
            </div>
      );
    }
}
