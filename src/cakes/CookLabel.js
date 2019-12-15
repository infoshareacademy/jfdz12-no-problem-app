import React from 'react';
import {Grid, Avatar, Typography,withStyles } from '@material-ui/core';

const styles= {
    avatar:{
        padding: '3px',
    },
    
    data:{
        padding: '5px 10px',
    },
}

function CookLabel(props){

        const cook = props.cook;
        const {classes} = props;

        return <>
            <Grid container item xs >
                
                <Grid item xs = {2} container justify='center' className={classes.avatar}>
                    <Avatar src={cook.avatar} variant="circle" />
                </Grid> 
                <Grid item container xs direction='column' className={classes.data}>
                    <Grid item container xs  >
                        <Typography>cukiernik: {cook.name} {cook.surname}</Typography>
                    </Grid>
                    <Grid item container xs >
                        <Typography>z miasta: {cook.location.city}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>

}

export default withStyles(styles)(CookLabel);
