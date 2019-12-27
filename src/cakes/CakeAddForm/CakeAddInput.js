import React from 'react';
import { TextField, Grid, withStyles } from '@material-ui/core';

const styles = {
    root: {
        '& .MuiOutlinedInput-root':{
            margin: '0px',
            minWidth: '100px',
            width: '100%',
        },
    },
    textField :{
        margin: '10px',
    },
  };

function FilterInput (props) {
        const { classes } = props;
        
    return (
        <Grid container justify='center' alignItems='center'>
            <div>{props.label}</div>
            <TextField 
                onChange = {props.onHandleCakeChange}
                value = {props.value}
                name = {props.name}
                variant='outlined'
                margin = 'dense'
                className={classes.textField}
            />

        </Grid>
        
    )
}

export default withStyles(styles)(FilterInput); 




