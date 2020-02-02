import React from 'react';
import { withStyles, Paper, CircularProgress } from '@material-ui/core';
import UserBasicData from './userDataComponent/UserBasicData';
import UserCookData from './userDataComponent/UserCookData';
import UserAvatarData from './userDataComponent/UserAvatarData';
import { Link } from 'react-router-dom';
import { getUserById } from '../../api/Api2';

const styles = {
    paper:{
        backgroundColor: '#fce4ec50',
    },
    login: {
        padding: '20px',
    },
}

class UserAllData extends React.Component{
    constructor(props){
        super(props);
        this.userId = sessionStorage.getItem('userId');
        this.state = {
            user: {},
            isLoading: true,
            loginUser: false,
        }
    }

    componentDidMount () {
        if (this.userId){
            getUserById(this.userId)
            .then(data => this.setState ({ user: data }))
            .catch(error => console.log('bład pobierania danych User', error.toString()))
            .finally(() => this.setState({
                    isLoading: false,
                    loginUser: true,
                }))
        } else {
            this.setState({
                loginUser:false,
                isLoading:false,
            })
        }
    }

    render(){
        const { classes } = this.props;
        const { user, isLoading, loginUser } = this.state;
        console.log(user)
        if (isLoading) {
            return(
                <Paper className={classes.paper}> 
                    <CircularProgress className={classes.login} color="secondary" />
                </Paper>
            )  
        }

        if (!loginUser){
            return (
                <Paper className={classes.paper}>
                    <div className={classes.login}>
                        <h1>Użytkownik nie zalogowany, zaloguj się </h1>
                        <Link to='/SignIn'>Zaloguj się </Link>
                    </div>
                </Paper>)
        }

        return (
            <Paper className={classes.paper}>
                <UserAvatarData user={user}/>
                <UserBasicData user={user}/>
                <UserCookData user={user}/>
            </Paper>
            )

    }
}

export default withStyles(styles)(UserAllData);