import React from 'react';
import { Button, Container, Grid, Paper, Typography, } from '@material-ui/core';
import './UserCard.css';
import { Link } from 'react-router-dom';
import { UserBasicData } from './userCardComponent/UserBasicData';
import UserMenu from './userCardComponent/UserMenu';
import UserLikeData from './userCardComponent/UserLikeData';
import {getLikesWithData,getLikesWithData2, getUserById } from '../api/Api2';

export class UserCard extends React.Component{ 
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
            getLikesWithData(this.userIdRef),
            getLikesWithData2(this.userIdRef),
        ])
        .then(data =>{
            this.setState ({
                user: data[0],
                likes: data[2],
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
 
        return (
            <div>
        
                { !isLoading && <Container maxWidth='lg'>
                    <Grid container style={{marginTop:'100px', minWidth:210}}>
                        <Grid item xs={12} className={'gridStyle'}>
                            <Paper>
                                <Typography variant='h4'className='headerTitle'>
                                    Konto użytkownika
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm ={3} className={'gridStyle'} style={{minWidth:'190px'}}>
                             <UserMenu 
                                onHandleClick = {this.handleClick}
                                selectedMenu = {selectedMenu}
                             />
                             
                        </Grid>
                        <Grid item xs className={'gridStyle'}>
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
                            style={{margin:'20px'}} 
                            variant='outlined'
                            color = 'secondary'
                            component = {Link} to={'/'}
                        >
                            zamknij
                        </Button>
                    </Grid>
                </Container>}    
            </div>
        )   
    }
}

