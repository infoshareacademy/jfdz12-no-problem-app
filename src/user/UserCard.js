import React from 'react';
import { Button, Container, Grid, Paper, Typography, withStyles } from '@material-ui/core';
import UserBasicData from './userCardComponent/UserBasicData';
import UserMenu from './userCardComponent/UserMenu';
import UserLikeData from './userCardComponent/UserLikeData';
import { getLikesWithData, getUserById } from '../api/Api2';
import PageWrapper from '../components/PageWrapper';

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
    }
}


class UserCard extends React.Component{ 
    constructor(){
        super();
        this.userIdRef = sessionStorage.getItem('userId');
        this.state ={
            user: {},
            likes:[],
            isLoading: true,
            selectedMenu: {
                basic : true,
                like: false,
            }
        };
    }

    componentDidMount(){

        Promise.all([
            getUserById(this.userIdRef),
            //getLikesWithData(this.userIdRef),
            getLikesWithData(this.userIdRef),
        ])
        .then(data =>{
            //console.log('dat0',data[0])
            this.setState ({
                user: data[0],
                likes: data[1],
            })}) 
        .catch(error => console.log('bład addformfetch', error.toString()))
        .finally(() => this.setState({
                isLoading: false,
            }))
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
        const {user, likes, isLoading, selectedMenu} =  this.state;
        const { classes } = this.props;
        
        return (
            <PageWrapper>
        
                { !isLoading && <Container maxWidth='lg'>
                    <Grid container className={classes.gridTop}>
                        <Grid item xs={12} className={classes.gridStyle}>
                            <Paper>
                                <Typography variant='h4' className={classes.headerTitle}>
                                    Konto użytkownika
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm ={3} className={classes.gridStyle2} style={{}}>
                             <UserMenu 
                                onHandleClick = {this.handleClick}
                                selectedMenu = {selectedMenu}
                             />
                             
                        </Grid>
                        <Grid item xs className={classes.gridStyle}>
                            {selectedMenu.basic &&
                                <UserBasicData  
                                    user = {user}
                                />}
                            {selectedMenu.like && 
                                <UserLikeData
                                    likes = {likes}
                                /> }
                                
                        </Grid>
    
    
                    </Grid>
                    <Grid>
                        < Button
                            className={classes.buttonStyle} 
                            variant='outlined'
                            color = 'secondary'
                            onClick = {this.props.history.goBack}
                        >
                            zamknij
                        </Button>
                    </Grid>
                </Container>}    
            </PageWrapper>
        )   
    }
}

export default withStyles(styles)(UserCard);