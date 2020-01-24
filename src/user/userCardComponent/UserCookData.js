import React from 'react';
import { Grid, Paper, withStyles, TextField, InputLabel, Avatar  } from '@material-ui/core';

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
    paper:{
        backgroundColor: '#fce4ec50',
    }
}

function UserCookData(props){

    const { user, classes } = props;
   
    return(
        <Paper className={classes.paper}>
            <Grid container direction='column' className={classes.root}>
                <Grid xs={12} item container justify='center' alignItems='center' className={classes.gridStyleAvatar}>
                    { user.avatar 
                        ? <Avatar src={user.avatar} variant="circle" style={{height:'50px', width:'50px'}} />
                        :<Avatar style={{padding:'7px'}} >
                            {user.name.slice(0,1).toUpperCase() }{user.surname.slice(0,1).toUpperCase()}
                        </Avatar>
                    }
                </Grid>
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
        </Paper>
        )
}

export default withStyles(styles)(UserCookData);