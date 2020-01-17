import React from 'react';
import { Grid, Paper, Divider, withStyles,  } from '@material-ui/core';

const styles = {
    textLeft: {
        padding: '10px',
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '16px',
    },
    textRight:{
        padding: '10px',
        textAlign: 'right',
        fontSize: '16px',
    },
    gridStyle:{
        padding: '10px',
        boxSizing: 'border-box',  
    },
    paper:{
        backgroundColor: '#fce4ec50',
    }

}

function UserBasicData(props){

    const { user, classes } = props;
    const gender = user.gender === 'male' ? 'mężczyzna' : 'kobieta'; 

    return(
        <Paper className={classes.paper}>
            <Grid container >
                <Grid xs={5} item container  direction='column' className={classes.gridStyle}>
                    <div className={classes.textRight}> Nick : </div> 
                    <div className={classes.textRight}>Nazwisko : </div>
                    <div className={classes.textRight}>Imię : </div>
                    <div className={classes.textRight}>płeć : </div>
                    <Divider variant = 'middle'/>
                    <div className={classes.textRight}>email : </div>
                    <div className={classes.textRight}>telefon komórkowy : </div>

                </Grid>
                <Grid item xs={7} container direction='column' className={classes.gridStyle}>
                    <div className={classes.textLeft}>{user.nick}</div>
                    <div className={classes.textLeft}> {user.name}</div>
                    <div className={classes.textLeft}>{user.surname}</div>
                    <div className={classes.textLeft}>{gender}</div>
                    <Divider variant = 'middle'/>
                    <div className={classes.textLeft}>{user.contact.mail}</div>
                    <div className={classes.textLeft}>{user.contact.mobile}</div>
                </Grid>

            </Grid>
        </Paper>
        )
}

export default withStyles(styles)(UserBasicData);