import React from 'react';
import {Grid, Link, Typography, Container, Avatar, Dialog, Button, TextField, FormControlLabel, Checkbox} from '@material-ui/core';
import './SignIn.css';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import UserSelect from './UserSelect';

export function SignIn(props) {
    //console.log('signin', props)
  return (
    <div>
        <Dialog
            open={props.openSignIn}
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
                        options = {props.users}
                        name = {'userId'}
                        value = {props.userId}
                        autoFocus
                        onHandleUserChange = {props.onHandleUserChange}
                    />
                    <TextField
                        onChange = {props.onHandleInput}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        
                        value={props.email}
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
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Zapametaj"
                    />
                    <Button
                        //type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={'submit'}
                        onClick = {props.onHandleOpenUserCard}
                    >
                        Pokaż dane
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
