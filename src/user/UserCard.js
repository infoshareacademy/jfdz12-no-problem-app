import React from 'react';
import { Button, Container, Grid, Paper, Typography, withStyles,CircularProgress } from '@material-ui/core';
import UserMenu from './userCardComponent/UserMenu';
import UserLikeData from './userCardComponent/UserLikeData';
import { getUserById, } from '../api/Api2';
import PageWrapper from '../components/PageWrapper';
import { Link } from 'react-router-dom';
import UserAllData from './userCardComponent/UserAllData';
import { UserCakeData } from './userCardComponent/UserCakeData';
import { connect } from 'react-redux';

const styles ={
    gridStyle: {
        padding: '10px',
    },
    gridStyle2:{
        minWidth:'190px',
        padding: '10px',
    },
    gridTop:{
        marginTop:'100px', 
        minWidth: 210,
    },
    headerTitle:{
        padding: '20px 10px',
        minWidth: '170px',
        backgroundColor:'#F5F5F6',   //#e6fff380',
    },
    buttonStyle:{
        margin:'20px'
    },
    paper:{
        backgroundColor: '#fce4ec50',
    },
}


class UserCard extends React.Component{ 
    constructor(props){
        super(props);
        this.backLink = props.location.search.substring(1,props.location.search.length);
        this.userIdRef = sessionStorage.getItem('userId');
        this.userIdRef2 = props.userIdInStore;
        this.state ={
            user: {},
            isLoading: true,
            selectedMenu: {
                basic : true,
                like: false,
                mCook: false,
                mCake: false,
            },
            loginUser:true,
        };
    }

    fetchUserFromApi = () => {
        return getUserById(this.userIdRef)
            .then(data =>{
                this.setState ({
                    user: data,
                })
                if (this.backLink){
                    this.setState(prevState => ({
                        selectedMenu:{
                            ...prevState.selectedMenu,
                            basic: false,
                            [this.backLink]: true,
                        }
                    }))
                }
            })
    }

    componentDidMount(){
        if (this.userIdRef){
            this.fetchUserFromApi() 
            .catch(error => console.log('bład addformfetch', error.toString()))
            .finally(() => this.setState({
                    isLoading: false,
                    loginUser: true,
                }))
        }else{
            this.setState({loginUser:false})
        }
    }

    handleClick = (name) => {
        const {selectedMenu} = this.state;
        const keys = Object.keys(selectedMenu);
        
        keys.forEach(key => {
            this.setState(prevState => ({
                selectedMenu:{
                    ...prevState.selectedMenu,
                    [key]: name === key ? true: false,
                }
            }))
        });
    }

    render(){
        const {user, isLoading, selectedMenu, loginUser, } =  this.state;
        const { classes } = this.props;
        
        if (isLoading) {
            return <PageWrapper >
                        <CircularProgress color="secondary" />
                    </PageWrapper>
        }

        if (!loginUser){
            return (<PageWrapper>
                <h1>Użytkownik nie zalogowany, zaloguj się </h1>
                <Link to='/SignIn'>Sign in</Link>
            </PageWrapper>)
        }

        return (
            <PageWrapper>
                <div>aaa:{this.props.userIdInStore} aaa:{this.userIdRef2}</div>
                { !isLoading && <Container maxWidth='lg'>
                    <Grid container className={classes.gridTop}>
                        <Grid item xs={12} className={classes.gridStyle}>
                            <Paper>
                                <Typography variant='h4' className={classes.headerTitle}>
                                    Konto użytkownika
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm ={3} className={classes.gridStyle2} >
                             <UserMenu 
                                onHandleClick = {this.handleClick}
                                selectedMenu = {selectedMenu}
                                userType={user.userType}
                             />    
                        </Grid>
                        <Grid item xs className={classes.gridStyle}>
                            {selectedMenu.basic &&
                                <UserAllData  
                                    user = {user}
                                    fetchUserFromApi={this.fetchUserFromApi}
                                />
                            }
                            {selectedMenu.like && 
                                <UserLikeData/> 
                            }
                            {selectedMenu.mCake &&
                                <UserCakeData/> 
                            }
                        </Grid>
                    </Grid>
                    <Grid>
                        < Button
                            className={classes.buttonStyle} 
                            variant='outlined'
                            color = 'secondary'
                            component ={Link} to = {'/'}
                        >
                            Zamknij
                        </Button>
                    </Grid>
                </Container>}    
            </PageWrapper>
        )   
    }
}

const mapStateToProps = (state) => ({
    userInStore: state.userReducer.user,
    userIdInStore: state.userReducer.userId, 
});
// const mapDispatchToProps = {
//     setUserToStore,
//     clearUserInStore,
// };
export default connect( mapStateToProps, null)(withStyles(styles)(UserCard));