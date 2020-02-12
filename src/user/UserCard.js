import React from 'react';
import { Button, Container, Grid, Paper, Typography, withStyles, } from '@material-ui/core';
import UserMenu from './userCardComponent/UserMenu';
import UserLikeData from './userCardComponent/UserLikeData';
import PageWrapper from '../components/PageWrapper';
import { Link } from 'react-router-dom';
import UserAllData from './userCardComponent/UserAllData';
import { UserCakeData } from './userCardComponent/UserCakeData';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
        this.backLink = props.location.search.substring(1);
        this.state ={
            user: {},
            selectedMenu: {
                basic : true,
                like: false,
                mCook: false,
                mCake: false,
            },
        };
    }

    componentDidMount(){
        if (this.backLink){
            this.setState(prevState => ({
                selectedMenu:{
                    ...prevState.selectedMenu,
                    basic: false,
                    [this.backLink]: true,
                }
            }))
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
        const { selectedMenu, } =  this.state;
        const { classes, userInStore, userIdInStore } = this.props;
       
        if (!userIdInStore){
            return (<PageWrapper>
                <h1>Użytkownik nie zalogowany, zaloguj się </h1>
                <Link to='/SignIn'>Sign in</Link>
            </PageWrapper>)
        }

        if(!userIdInStore){
            return <Redirect to={'/userCard'}/>
        }


        return (
            <PageWrapper>
                
                {<Container maxWidth='lg'>
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
                                userType={userInStore.userType}
                             />    
                        </Grid>
                        <Grid item xs className={classes.gridStyle}>
                            {selectedMenu.basic &&
                                <UserAllData  
                                    user = {userInStore}
                                    //fetchUserFromApi={this.fetchUserFromApi}
                                />
                            }
                            {selectedMenu.like && 
                                <UserLikeData
                                    userId = {userInStore.id}
                                /> 
                            }
                            {selectedMenu.mCake &&
                                <UserCakeData
                                    userId = {userInStore.id}
                                /> 
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

export default connect( mapStateToProps, null)(withStyles(styles)(UserCard));