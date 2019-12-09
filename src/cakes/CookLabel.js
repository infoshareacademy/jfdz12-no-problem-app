import React from 'react';
import {Grid, Avatar, Typography,withStyles } from '@material-ui/core';

const styles= {
    avatar:{
        padding: '3px',
    },
    
    data:{
        paddingTop:'5px ',
        paddingBottom: '5px',
        paddingRight: '10px',
        paddingLeft: '10px',
        // border: '1px solid black',
    },
}

function CookLabel(props){

        const cook = props.cook;
        const {classes} = props;

        return <>
            <Grid container xs >
                
                <Grid item xs = {2} container justify='center' className={classes.avatar}>
                    <Avatar src={cook.avatar} variant="circle" />
                </Grid> 
                <Grid container xs direction='column' className={classes.data}>
                    <Grid item container justify='flex-start' xs  >
                        <Typography>cukiernik: {cook.name} {cook.surname}</Typography>
                    </Grid>
                    <Grid item container justify='flex-start' xs >
                        <Typography>z miasta: {cook.location.city}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>

}

export default withStyles(styles)(CookLabel);
