import React from 'react';
import { withStyles, Grid, Typography, Avatar, Button, TextField, CircularProgress, } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link as Rlink} from 'react-router-dom';
import {getUsers} from '../api/Api2';
import PageWrapper from '../components/PageWrapper';
import { auth,  } from 'firebase/app';
import {Redirect} from 'react-router-dom';
import MessageSnakebar from './signComponent/MessageSnakebar';
import {styles} from './styles/SignInStyles'
import { connect } from 'react-redux';
import { setUserToStore, clearUserInStore} from '../state/user'

const loginError = ( error ) => {

    switch (error){
        case 'auth/invalid-email' :  {
            return "błędny email";
        }
        case 'auth/wrong-password' : {
            return "błędne hasło lub uzytkownik nie posiada hasła"
        }
        case 'auth/user-not-found' : {
            return 'Nie ma takiego użytkownika albo użytkownik został skasowany'
        }
        default:
            return "błąd logowania, spróbuj ponownie "
    }
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
        auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            const signInUser = this.state.users.find(user => user.uid === auth().currentUser.uid )
            //this.saveUserIdToLocalStorage(signInUser.id);
            this.props.setUserToStore(signInUser);
            this.setState({
                redirect: true,
            })
        })
        .catch((error) => {
            this.setState({
                error: loginError(error.code)
            })
        });
    };

    handleOnClick = (event) => {
        event.preventDefault();
        this.signIn();
    };

    handleResetPassword = () =>{
        auth().sendPasswordResetEmail(this.state.email);
        this.setState({
            emailResetMessage: true,
            redirect: true,
        });
    }

    // saveUserIdToLocalStorage = (userId) => {
    //     sessionStorage.setItem('userId', userId);
    // }

    handleClose = () =>{
        this.setState({emailResetMessage:false});
    }

    render(){
        const { emailResetMessage, redirect, isLoading, error } = this.state;
        const { classes, } = this.props;

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
                        <Typography variant='h6'>
                            {error}
                        </Typography>
                        <Typography variant='h6'>
                            <Rlink to={'/'}>Wróć na stronę główną</Rlink>
                        </Typography>
                </PageWrapper>)
        }

        return (
            <PageWrapper>
                <MessageSnakebar
                    open={emailResetMessage}
                    onHandleClose = {this.handleClose}
                    message = 'wysłaliśmy ci link do zresetowania hasła'
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

// const mapStateToProps = (state) => ({
//     userInStore: state.userReducer.user,
//     userIdInStore: state.userReducer.userId, 
// });

const mapDispatchToProps = {
    setUserToStore,
    clearUserInStore,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(SignIn));