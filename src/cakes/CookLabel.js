import React from 'react';
import {Grid, Avatar, withStyles } from '@material-ui/core';

const styles= {
    avatar:{
        padding: '3px',
    },
    
    data:{
        padding: '5px 10px',
    },
    labelTitle:{
        fontSize: '14px',
        width: '70px',
        textAlign: 'left',
    },
    labelSubTitle:{
        fontSize: '14px',
        fontWeight: 'bold',
    },
    container:{
        paddingTop:'10px',
    }
}

function CookLabel(props){

    const cook = props.cook;
    const {classes} = props;

    return <>
        <Grid container item xs className={classes.container}>
            
            <Grid item xs = {2} md={2} container justify='center' className={classes.avatar}>
                <Avatar src={cook.avatar} variant="circle" />
            </Grid> 
            <Grid item container xs direction='column' className={classes.data}>
                <Grid item container xs >
                    <div className = {classes.labelTitle}>cukiernik: </div> 
                    <div className = {classes.labelSubTitle}>{cook.name} {cook.surname}</div>
                </Grid>
                <Grid item container xs >
                    <span className = {classes.labelTitle}>miasto: </span>
                    <span className = {classes.labelSubTitle}>{cook.location.city}</span>
                </Grid>
            </Grid>
        </Grid>
    </>

}

export default withStyles(styles)(CookLabel);
