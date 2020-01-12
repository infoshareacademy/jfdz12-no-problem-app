import React from 'react';
import { Grid, Paper, Divider, } from '@material-ui/core';


export function UserBasicData(props){

    const {user} = props;
    const gender = user.gender === 'male' ? 'mężczyzna' : 'kobieta'; 

    return(
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
                    <div className={'labelLeft'}>{gender}</div>
                    <Divider variant = 'middle'/>
                    <div className={'labelLeft'}>{user.contact.mail}</div>
                    <div className={'labelLeft'}>{user.contact.mobile}</div>
                </Grid>

            </Grid>
        </Paper>
        )

}