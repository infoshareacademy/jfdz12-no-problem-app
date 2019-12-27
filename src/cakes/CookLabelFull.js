import React from 'react';
import {Grid, Avatar, Typography,withStyles } from '@material-ui/core';

const styles= {
    avatar:{
        padding: '3px',
    },
    
    data:{
        padding: '5px 10px',
    },
    labelTitle:{
        fontSize: '14px',
    },
    labelSubTitle:{
        fontSize: '14px',
        fontWeight: 'bold',
    },

}

function CookLabelFull(props){

        const cook = props.cook;
        const {classes} = props;

        return <>
            <Grid container wrap='wrap' >
                
                <Grid item xs = {1} container justify='center' className={classes.avatar}>
                    <Avatar src={cook.avatar} variant="circle" />
                </Grid> 
                <Grid item container xs={11} sm={5} md={4} direction='column' className={classes.data}>
                    <Grid item>
                        <Typography> 
                            <span className = {classes.labelTitle}>cukiernik: </span> 
                            <span className = {classes.labelSubTitle}>{cook.name} {cook.surname}</span>
                        </Typography>
                    </Grid>
                    
                </Grid>
                <Grid item container xs={12} sm={6} md={3} direction='column'>
                    <Grid item>
                            <span className = {classes.labelTitle}>miasto: </span>
                            <span className = {classes.labelSubTitle}>{cook.location.city}</span>
                    </Grid>
                    <Grid item>
                            <span className = {classes.labelTitle}>dzielnica: </span>
                            <span className = {classes.labelSubTitle}>{cook.location.district}</span>
                    </Grid>
                    <Grid item>
                            <span className = {classes.labelTitle}>ulica: </span>
                            <span className = {classes.labelSubTitle}>{cook.location.street}</span>
                    </Grid>
                </Grid>
                <Grid item container xs={12} sm={6} md={4} direction='column'>
                    <Grid item>
                            <span className = {classes.labelTitle}>mail: </span>
                            <span className = {classes.labelSubTitle}>{cook.contact.mail}</span>
                    </Grid>
                    <Grid item>
                            <span className = {classes.labelTitle}>telefon: </span>
                            <span className = {classes.labelSubTitle}>{cook.contact.mobile}</span>
                    </Grid>
                </Grid>
            </Grid>
        </>

}

export default withStyles(styles)(CookLabelFull);
