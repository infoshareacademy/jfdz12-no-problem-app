import React from 'react';
import { withStyles, Grid, Link, Typography, Container, Avatar, Dialog, Button, TextField, FormControlLabel, Checkbox ,CircularProgress} from '@material-ui/core';
import './SignIn.css';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { UserSelect } from './UserSelect';
import {Link as Rlink} from 'react-router-dom';
import {getUsers} from '../api/Api2';

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

    handleClose = () =>{
        const {userId} = this.state;
        sessionStorage.setItem('userId', userId);
        this.setState({
            userId: '',
            openSignIn: false,
        })
    }

    render(){
        const { openSignIn, userId, users, isLoading, error } = this.state;
        const { classes } = this.props;
        
        if(isLoading){
            return (<div style={{paddingTop:'100px'}}>
                        <CircularProgress color="secondary" />
                </div>)
        }

        if(error !==""){
            return (<div style={{paddingTop:'100px'}}>
                       {error}
                </div>)
        }

        return (
            <div>
                
                <Dialog
                    open={openSignIn}
                    className ={classes.root}
                >
                    <Container component="main" width="xs" style={{padding:'0px', }}>
                        <div className={classes.paper} >
                            <Avatar className = {classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Logowanie
                            </Typography>
                            <Grid  >
                                <UserSelect 
                                    options = {users}
                                    name = {'userId'}
                                    value = {userId}
                                    autoFocus
                                    onHandleChange = {this.handleChange}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    //fullWidth
                                    style={{width:'100%'}}
                                    id="email"
                                    label="e-mail"
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
                                    label="hasło"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    disabled
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
                                    <Rlink to='/SignOn' variant="body2">
                                        {"Nie masz konta? Zarejestruj się"}
                                    </Rlink>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </Dialog>
            </div>
      );
    }
}

export default withStyles(styles)(SignIn);