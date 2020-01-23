import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { withStyles, TextField, Grid, Typography, Avatar, Button} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MySelect from './signComponent/MySelect';
import { GENDERSELECT, USERTYPE } from '../constans/selectConstans';


const styles = {
    root:{
        '& .MuiButton-contained':{
            backgroundColor: '#47817Ee0',
            color: 'white',
        },
    },
    gridWrapper :{
        borderRadius: '20px',
        color: '#47817E',
        border: '5px solid #47817E' 
    },
    paper: {
        maxWidth: '800px',
        width:'100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#DFE0DF50', /* #eeeeee, */
        padding: '20px',
        borderRadius: '20px',
        color: '#47817E',
        border: '3px solid #DF9A63'
      },
    
    avatar: {
        margin: '8px',
        backgroundColor: '#DF9A63',
    },
    
    form: {
        width: '100%', 
        marginTop: '8px',
    },
    subGrid:{
        padding: '20px'
    },
    
    submit: {
        margin: '24px 0px 16px',

     },
}


class SignOn extends Component {
    state={
        gender: '',
        name:'',
        surname:'',
        email:'',
        password:'',
        nick:'',
        mobile:'',
        userType: 'user',
    }

    handleChange = (event) =>{
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        })
        console.log(name,value)
    }

    handleOnClick = (event) =>{
        event.preventDefault();
        console.log(this.state)
    }
    
    render() {
        const {classes} = this.props;
        const {gender, name, surname, mobile, password, email, nick, userType} = this.state;
        return (
            <PageWrapper>
               <Grid
                    container
                    justify='center'
                    width="xs" 
                    className = {classes.root}    
                >
                    <form className={classes.paper} >
                        <Avatar className = {classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Rejestracja
                        </Typography>
                        <MySelect 
                            onHandleChange = {this.handleChange}
                            name = 'userType'
                            value = {userType}
                            options = {USERTYPE}
                            label='rodzaj użytkownika'
                            align = 'left'
                            width = '300px'
                            labelWidth = {125}
                        />
                        <Grid container xs={12} item>
                            <Grid item xs={6} className={classes.subGrid}>
                                <TextField 
                                    onChange = {this.handleChange}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="nick"
                                    label="nick"
                                    placeholder="podaj nick"
                                    type="TextField"
                                    value={nick}
                                />
                                <TextField 
                                    onChange = {this.handleChange}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="name"
                                    label="imię"
                                    placeholder="podaj imię"
                                    type="TextField"
                                    value={name}
                                />
                                <TextField 
                                    onChange = {this.handleChange}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="surname"
                                    placeholder="podaj nazwisko"
                                    label="nazwisko"
                                    type="TextField"
                                    value={surname}
                                />
                                <MySelect
                                    onHandleChange = {this.handleChange}
                                    name = 'gender'
                                    value = {gender}
                                    options = {GENDERSELECT}
                                    label='płeć'
                                    align = 'left'
                                    width='100%'
                                    labelWidth = {30}
                                /> 
                                
                            </Grid>
                            <Grid item xs={6} className={classes.subGrid}>
                                <TextField 
                                    onChange = {this.handleChange}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="mobile"
                                    label="telefon komórkowy"
                                    type="TextField"
                                    value={mobile}
                                
                                />
                                <TextField
                                    onChange = {this.handleChange}
                                    variant="outlined"
                                    margin="normal"
                                    placeholder="email"
                                    required
                                    fullWidth
                                    label="e-mail"
                                    name="email"
                                    value={email}
                                />
                                <TextField
                                    onChange = {this.handleChange}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    placeholder="podaj hasło"
                                    name="password"
                                    label="hasło"
                                    type="password"
                                    value = {password}
                                />

                            </Grid>
                        </Grid>

                        <Grid xs={12} item>
                            <Button
                                type='submit'
                                fullWidth
                                name='userId'
                                variant="contained"
                                className={classes.submit}
                                onClick = {this.handleOnClick}
                            >
                                Zapisz
                            </Button>
                        </Grid>
                            
                    </form>
                </Grid>

            </PageWrapper>
        )
    }
}
export default withStyles(styles)(SignOn)