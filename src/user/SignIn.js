import React from 'react';
import { withStyles, Grid, Typography, Avatar, Button, TextField, CircularProgress, } from '@material-ui/core';
//import { IconButton, Snackbar } from '@material-ui/core';
import './SignIn.css';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link as Rlink} from 'react-router-dom';
import {getUsers} from '../api/Api2';
import PageWrapper from '../components/PageWrapper';
import firebase from 'firebase/app';
import {Redirect} from 'react-router-dom';
import MessageSnakebar from './signComponent/MessageSnakebar';


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
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#DFE0DF50', /* #eeeeee, */
        padding: '30px',
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
    
    submit: {
        margin: '24px 0px 16px',

     },
}

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            redirect: false,
            openSignIn: true,
            userId: '',
            users:[],
            isLoading: true,
            error:"",
            emailResetMessage:false,
        };
    }
 
    componentDidMount(){
        getUsers()
            .then(data => this.setState({users: data}))
            .catch(error => this.setState({error: error.toString()}))
            .finally(() => this.setState({isLoading: false}))
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        })
    }

    signIn = () => {
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            const signInUser = this.state.users.find(user => user.uid === firebase.auth().currentUser.uid )
         
            this.saveUserIdToLocalStorage(signInUser.id)
            
            this.setState({
                redirect: true,
            })
        })
        .catch(function(error) {
            alert(`${error.code}: ${error.message}`)
        });
    };

    handleOnClick = (event) => {
        event.preventDefault();

        this.signIn();
    };

    handleResetPassword = () =>{
        // firebase.auth().sendPasswordResetEmail(this.state.email);
        this.setState({
            emailResetMessage: true,
            //redirect: true,
        });
    }

    saveUserIdToLocalStorage = (userId) => {
        sessionStorage.setItem('userId', userId);
    }

    handleClose = () =>{
        this.setState({emailResetMessage:false});
    }

    render(){
        const { emailResetMessage, redirect, isLoading, error } = this.state;
        const { classes } = this.props;

        if(redirect) {
            return <Redirect to={'/'} />
        }

        if(isLoading){
            return (<PageWrapper >
                        <CircularProgress color="secondary" />
                </PageWrapper>)
        }

        if(error !==""){
            return (<PageWrapper >
                       {error}
                </PageWrapper>)
        }

        return (
            <PageWrapper>
                <MessageSnakebar
                    open={emailResetMessage}
                    onHandleClose = {this.handleClose}
                />
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
                            Logowanie
                        </Typography>
                        <Grid  >
                            
                            <TextField
                                onChange = {this.handleChange}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="e-mail"
                                name="email"
                                autoComplete="email"
                            />
                            <TextField
                                onChange = {this.handleChange}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="hasło"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
    
                            <Button
                                fullWidth
                                name='userId'
                                variant="contained"
                                className={classes.submit}
                                onClick = {this.handleOnClick}
                            >
                                Zaloguj
                            </Button>
                            
                            <Grid container alignItems='center'>
                                <Grid item xs >
                                    <Button onClick={this.handleResetPassword} 
                                        color='primary'
                                    >
                                        Zapomniałeś hasła?
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button component ={Rlink} 
                                            to='/SignOn'
                                            color='primary' 
                                    >
                                        {"Nie masz konta? Zarejestruj się"}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                
            </PageWrapper>
      );
    }
}

export default withStyles(styles)(SignIn);