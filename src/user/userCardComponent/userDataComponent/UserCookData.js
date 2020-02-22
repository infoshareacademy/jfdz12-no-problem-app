import React from 'react';
import { Grid, TextField, InputLabel, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root:{
        '& .MuiInputBase-root':{
            fontSize: '18px',

        },
        '& .MuiInputBase-root.Mui-disabled':{
            color: 'rgba(0, 0, 0, 0.87)',
        },
        '& .MuiInputBase-input' :{
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
            },
        },
    },
    textLeft: {
        padding: '10px',
        textAlign: 'left',   
        maxWidth: '300px',
        width: '100%',
        minWidth: '200px',
    },
    textRight:{
        padding: '17px 10px',
        maxWidth: '200px',
        width: '100%', 
        textAlign: 'right',
        fontSize: '16px',
        minWidth: '200px',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        },
    },
    gridStyle:{
        padding: '0px 10px',
        boxSizing: 'border-box',
        flexWrap: 'nowrap',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
        },  
    },
    paper:{
        backgroundColor: '#fce4ec50',
    }
}))

function UserCookData(props){
    const classes = useStyles();
    const { user, noEdit } = props;
   
    return(
        <Grid container justify="center" direction='column' className={classes.root}>
            <Grid xs={12} item container justify="center" className={classes.gridStyle}>
                <InputLabel id="city" className={classes.textRight}> Miasto : </InputLabel> 
                <TextField labelid="city" name="city" disabled={noEdit} className={classes.textLeft} 
                            onChange={props.handleChange} value = {user.location.city || ""}/>    
            </Grid>
            <Grid xs={12} item container justify="center" className={classes.gridStyle}>
                <InputLabel id="district" className={classes.textRight}>Dzielnica : </InputLabel>
                <TextField labelid="district" name="district" disabled={noEdit} className={classes.textLeft} 
                            onChange={props.handleChange} value = {user.location.district || ""}/>
            </Grid>
            <Grid xs={12} item container justify="center" className={classes.gridStyle}>
                <InputLabel id="street" className={classes.textRight}>Ulica : </InputLabel>
                <TextField labelid="street" name="street" disabled={noEdit} className={classes.textLeft} 
                            onChange={props.handleChange} value = {user.location.street || ""}/>
            </Grid>
            <Grid xs={12} item container justify="center" className={classes.gridStyle}>
                <InputLabel id="description" className={classes.textRight}>Opis : </InputLabel>
                <TextField 
                    labelid="description"
                    name = "description"
                    disabled={noEdit} multiline rows = {3} 
                    className={classes.textLeft} 
                    value = {user.description}
                    onChange={props.handleChange}
                />
            </Grid>

        </Grid>
        )
}

export default UserCookData;