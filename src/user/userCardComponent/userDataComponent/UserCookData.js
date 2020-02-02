import React from 'react';
import { Grid, withStyles, TextField, InputLabel, } from '@material-ui/core';

const styles = {
    root:{
        '& .MuiInputBase-root':{
            fontSize: '18px',

        },
        '& .MuiInputBase-root.Mui-disabled':{
            color: 'rgba(0, 0, 0, 0.87)',
        }
    },
    textLeft: {
        padding: '10px',
        textAlign: 'left',   
        maxWidth: '300px',
        width: '100%',
    },
    textRight:{
        padding: '17px 10px',
        maxWidth: '200px',
        width: '100%', 
        textAlign: 'right',
        fontSize: '16px',
    },
    gridStyle:{
        padding: '0px 10px',
        boxSizing: 'border-box',  
    },
    paper:{
        backgroundColor: '#fce4ec50',
    }
}

function UserCookData(props){

    const { user, classes } = props;
   
    return(
        <Grid container direction='column' className={classes.root}>
            <Grid xs={12} item container className={classes.gridStyle}>
                <InputLabel id="city" className={classes.textRight}> Miasto : </InputLabel> 
                <TextField labelid="city" disabled className={classes.textLeft} value = {user.location.city}/>    
            </Grid>
            <Grid xs={12} item container className={classes.gridStyle}>
                <InputLabel className={classes.textRight}>Dzielnica : </InputLabel>
                <TextField disabled className={classes.textLeft} value = {user.location.district}/>
            </Grid>
            <Grid xs={12} item container className={classes.gridStyle}>
                <InputLabel className={classes.textRight}>Ulica : </InputLabel>
                <TextField disabled className={classes.textLeft} value = {user.location.street}/>
            </Grid>
            <Grid xs={12} item container className={classes.gridStyle}>
                <InputLabel className={classes.textRight}>Opis : </InputLabel>
                <TextField 
                    disabled 
                    multiline
                    rows = {3} 
                    className={classes.textLeft} 
                    value = {user.description}
                />
            </Grid>

        </Grid>
        )
}

export default withStyles(styles)(UserCookData);