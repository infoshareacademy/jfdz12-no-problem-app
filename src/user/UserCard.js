import React from 'react';
import {dataManager} from '../api/Api';
import { Button, Container, Grid, Paper, Typography, } from '@material-ui/core';
import './UserCard.css';
import { Link } from 'react-router-dom';
import { UserBasicData } from './userCardComponent/UserBasicData';
import { UserMenu } from './userCardComponent/UserMenu';
import { UserLikeData } from './userCardComponent/UserLikeData';

export class UserCard extends React.Component{ 
    constructor(){
        super();
        this.userIdRef = sessionStorage.getItem('userId');
        this.state ={
            user: {},
            likeData:{},
            isLoading: true,
            selectedMenu: {
                basic : true,
                like: false,
            }
        };
    }

    componentDidMount(){
        setTimeout (() => {
            const userData = dataManager.getUserById(this.userIdRef);
            const likeData = dataManager.getLikesWithData(this.userIdRef);
            this.setState ({
                user: userData,
                likes: likeData,
                isLoading: false,  
            }) ;
        }, 200) 
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
        console.log(likes);

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
                        <Grid item xs={12} sm ={3} className={'gridStyle'} style={{minWidth:'170px'}}>
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
                        < Button
                            style={{margin:'20px'}} 
                            variant='outlined'
                            color = 'primary'
                            component = {Link} to={'/userAccount'}
                        >
                            wróć do listy
                        </Button>    
                    </Grid>
                </Container>}    
            </div>
        )   
    }
}

