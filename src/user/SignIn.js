import React from 'react';
import { withStyles, Grid, Link, Typography, Container, Avatar, Dialog, Button, TextField, FormControlLabel, Checkbox ,CircularProgress} from '@material-ui/core';
import './SignIn.css';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link as Rlink} from 'react-router-dom';
import {getUsers} from '../api/Api2';
import PageWrapper from '../components/PageWrapper';
import firebase from 'firebase';
import {Redirect} from 'react-router-dom';

const styles = {
    root :{
        '& .MuiPaper-rounded' :{
            borderRadius: '20px',
            color: '#47817E',
            border: '5px solid #47817E' 
        }
    },
    paper: {
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ae6dab1a', /* #eeeeee, */
        padding: '30px',
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
    };

    handleOnClick = (event) => {
        event.preventDefault();

        this.signIn();
    };

    saveUserIdToLocalStorage = (userId) => {
        sessionStorage.setItem('userId', userId);
    }

    render(){
        const { openSignIn, redirect, isLoading, error } = this.state;
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
            <div>
                
                <Dialog
                    open={openSignIn}
                    className ={classes.root}
                >
                    <Container component="main" width="xs" style={{padding:'0px', }}>
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
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Zapamiętaj"
                                    disabled
                                />
                                <Button
                                    fullWidth
                                    name='userId'
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    //component = {Rlink} to={'/'}
                                    onClick = {this.handleOnClick}
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
                                    <Rlink to='/SignOn' variant="body2">
                                        {"Nie masz konta? Zarejestruj się"}
                                    </Rlink>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </Container>
                </Dialog>
            </div>
      );
    }
}

export default withStyles(styles)(SignIn);