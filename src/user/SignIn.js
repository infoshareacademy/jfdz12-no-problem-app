import React from 'react';
import {Avatar, Dialog, Button, TextField, FormControlLabel, Checkbox} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import './SignIn.css';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export function SignIn(props) {

  return (
    <div>
        <Dialog
            open={true}
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
                        autoFocus
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
