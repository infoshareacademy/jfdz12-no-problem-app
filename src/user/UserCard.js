import React from 'react';
import { Button, Container, Grid, Paper, Typography, Divider, MenuList, MenuItem } from '@material-ui/core';
import './UserCard.css';
import {dataManager} from '../api/Api'
import { Link } from 'react-router-dom'


export function UserCard (props){
    const userIdRef = props.match.params.id;
    
    const user = dataManager.getUserById(userIdRef) || {}; 


    return (
        <div>
            <Container maxWidth='lg' style={{boxSizing:'border-box'}}>
                <Grid container>
                    <Grid item xs={12} className={'gridStyle'}>
                        <Paper>
                            <Typography variant='h4'className='headerTitle'>
                                Konto użytkownika
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={3} className={'gridStyle'}>
                        <Paper>
                            <MenuList>
                                <MenuItem>
                                    <div className={'leftTextMenu'}> Dane podstawowe</div>    
                                </MenuItem>
                                <Divider variant='middle'/>
                                <MenuItem>
                                    <div className={'leftTextMenu'}> Twoje polubienia</div>
                                </MenuItem>
                            </MenuList>
                            
                            

                        </Paper>
                    </Grid>
                    <Grid item xs={9} className={'gridStyle'}>
                        <Paper >
                            <Grid container >
                                <Grid xs={5} item container  direction='column' className={'gridStyle'}>
                                    <div className={'labelRight'}> Nick : </div> 
                                    <div className={'labelRight'}>Nazwisko : </div>
                                    <div className={'labelRight'}>Imię : </div>
                                    <div className={'labelRight'}>płeć : </div>
                                    <Divider variant = 'middle'/>
                                    <div className={'labelRight'}>email : </div>
                                    <div className={'labelRight'}>telefon komórkowy : </div>

                                </Grid>
                                <Grid item xs={7} container direction='column' className={'gridStyle'}>
                                    <div className={'labelLeft'}>{user.nick}</div>
                                    <div className={'labelLeft'}> {user.name}</div>
                                    <div className={'labelLeft'}>{user.surname}</div>
                                    <div className={'labelLeft'}>{user.gender}</div>
                                    <Divider variant = 'middle'/>
                                    <div className={'labelLeft'}>{user.contact.mail}</div>
                                    <div className={'labelLeft'}>{user.contact.mobile}</div>
                                </Grid>

                            </Grid>
                        </Paper>

                    </Grid>


                </Grid>
                <Grid>
                    < Button
                        style={{margin:'20px'}} 
                        variant='outlined'
                        color = 'secondary'
                        component = {Link} to={'/userAccount'}
                       // onClick = {() => props.onHandleOpen('openUserCard')}
                    >
                        zamknij
                    </Button>    
                </Grid>
            </Container>    
        </div>
    )   
}

