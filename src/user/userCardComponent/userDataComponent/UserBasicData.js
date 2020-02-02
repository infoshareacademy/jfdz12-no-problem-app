import React from 'react';
import { Grid, InputLabel, TextField, withStyles,  } from '@material-ui/core';

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
    gridStyleAvatar: {
        padding: '20px',
    },
}

function UserBasicData(props){

    const { user, classes } = props;
    const gender = user.gender === 'male' ? 'mężczyzna' : 'kobieta'; 
 
    return(
        <Grid container direction='column' className={classes.root}>
            <Grid xs={12} item container className={classes.gridStyle}>
                <InputLabel id="nick" className={classes.textRight}> Nick : </InputLabel> 
                <TextField labelid="nick" disabled className={classes.textLeft} value= {user.nick}/>    
            </Grid>
            <Grid xs={12} item container className={classes.gridStyle}>
                <InputLabel id="name" className={classes.textRight}> imię : </InputLabel> 
                <TextField labelid="name" disabled className={classes.textLeft} value= {user.name}/>    
            </Grid>
            <Grid xs={12} item container className={classes.gridStyle}>
                <InputLabel id="surname" className={classes.textRight}> Nazwisko : </InputLabel> 
                <TextField labelid="surname" disabled className={classes.textLeft} value= {user.surname}/>    
            </Grid>
            <Grid xs={12} item container className={classes.gridStyle}>
                <InputLabel id="gender" className={classes.textRight}> Płeć : </InputLabel> 
                <TextField labelid="gender" disabled className={classes.textLeft} value= {gender}/>    
            </Grid>
            <Grid xs={12} item container className={classes.gridStyle}>
                <InputLabel id="email" className={classes.textRight}> email : </InputLabel> 
                <TextField labelid="email" disabled className={classes.textLeft} value= {user.contact.mail}/>    
            </Grid>
            <Grid xs={12} item container className={classes.gridStyle}>
                <InputLabel id="mobile" className={classes.textRight}> telefon komórkowy : </InputLabel> 
                <TextField labelid="mobile" disabled className={classes.textLeft} value= {user.contact.mobile}/>    
            </Grid>
        </Grid>
        )
}

export default withStyles(styles)(UserBasicData);