import React from 'react';
import { withStyles, Paper, CircularProgress, Grid, Button, InputLabel } from '@material-ui/core';
import UserBasicData from './userDataComponent/UserBasicData';
import UserCookData from './userDataComponent/UserCookData';
import UserAvatarData from './userDataComponent/UserAvatarData';
import { Link } from 'react-router-dom';
import { getUserById, updateUserFetch } from '../../api/Api2';
import MessageSnakebar from '../../components/MessageSnakebar';
import { USERTYPE } from '../../constans/selectConstans';
import { UserSelect } from './userDataComponent/UserSelect';
import firebase from 'firebase';

const styles = {
    paper:{
        backgroundColor: '#fce4ec50',
    },
    login: {
        padding: '20px',
    },
    button:{
        margin:'0px 20px',
        width: '100px',
    },
    gridStyle:{
        padding: '20px 10px',
        boxSizing: 'border-box',  
    },
    textRight:{
        padding: '17px 10px',
        maxWidth: '200px',
        width: '100%', 
        textAlign: 'right',
        fontSize: '16px',
    },
    root:{
        '& .MuiInputBase-root':{
            fontSize: '18px',

        },
        '& .MuiInputBase-root.Mui-disabled':{
            color: 'rgba(0, 0, 0, 0.87)',
        }
    },
};

class UserAllData extends React.Component{
    constructor(props){
        super(props);
        this.userId = sessionStorage.getItem('userId');
        this.state = {
            user: {},
            isLoading: true,
            loginUser: false,
            noEdit: true,
            isUpdate: false,
            file: null,
        }
    }

    handleFileAdd = (event) => {
        const file =  event.target.files[0];
        const fileName = file.name;
        
        firebase.storage().ref(`avatars/${Date.now()}${fileName}`)
            .put(file)
            .then((res) => {
                res.ref.getDownloadURL().then(url => {
                    
                    this.setState(prevState => ({
                            user:{
                                ...prevState.user,
                                avatar : url, 
                            },
                        }))
                });
            })
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

    handleOnEdit = () =>{
        this.setState({noEdit: false });
    }

    handleOnSave = () => {
        this.setState({isLoading: true});

        updateUserFetch(this.userId, this.state.user)
            .then(res => console.log('update user:', res))
            .catch(error => console.log('error', error.message))
            .finally(() => {
                    this.setState({
                        isLoading: false,
                        isUpdate: true,
                        noEdit: true,
                    });
                    this.props.fetchUserFromApi()
                })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        
        if(name === 'mobile'){
            this.setState(prevState =>({ 
                user: { 
                    ...prevState.user,
                    contact: {...prevState.user.contact, [name]: value }
                }}));
            }else if(name === 'city' || name === 'street' || name==='district' ){
                this.setState(prevState =>({ 
                    user: { 
                        ...prevState.user,
                        location: {...prevState.user.location, [name]: value }
                    }}));
            }else{
                this.setState(prevState =>({user: {...prevState.user, [name]: value },}))
        }
    }

    handleChangeUserType = (event) =>{
        this.setState(prevState =>({
            user: {
                ...prevState.user, 
                location: prevState.user.location ? prevState.user.location : { city: "", district: "", street: ""},
                userType: event.target.value, 
            }
        }))
    };

    handleSnakebarClose = () =>{
        this.setState({isUpdate: false})
    }

    handleDeleteAvatar = () =>{
        this.setState(prevState => ({user: {...prevState.user, avatar:null }}));
    }


    render(){
        const { classes } = this.props;
        const { user, isLoading, loginUser, noEdit, isUpdate } = this.state;
    
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

        return (<>
             <MessageSnakebar
                open={isUpdate}
                onHandleClose={this.handleSnakebarClose}
                backColor={'success'}
                message={`dane zostały zakutualizowane`}
            />
            <Paper className={classes.paper}>
                <Grid container justify="center" alignItems="center" className={classes.gridStyle}>
                    <Button onClick={this.handleOnEdit}  variant='outlined' color="secondary" className={classes.button}>
                        Edycja
                    </Button>
                    <Button onClick={this.handleOnSave} className={classes.button} variant='outlined' color="primary">
                        Zapis
                    </Button>
                </Grid>
                <Grid container justify="center" alignItems="center" className={classes.root}>
                    <InputLabel className={classes.textRight}> Typ użytkownika : </InputLabel>
                    <UserSelect
                        onHandleChange={this.handleChangeUserType}
                        name='userType'
                        value={user.userType}
                        options={USERTYPE}
                        align='left'
                        width='300px'
                        noEdit={noEdit}
                    />
                </Grid>
                <UserAvatarData user={user} noEdit={noEdit} handleDeleteAvatar={this.handleDeleteAvatar} handleFileAdd={this.handleFileAdd}/>
                <UserBasicData user={user} noEdit={noEdit} handleChange={this.handleChange}/>
                {user.userType === 'cook' &&
                        <UserCookData user={user} noEdit={noEdit} 
                            handleChange={this.handleChange}
                        />
                }
            </Paper>
        </> )
    }
}

export default withStyles(styles)(UserAllData);