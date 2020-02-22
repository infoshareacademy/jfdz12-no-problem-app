import React from 'react';
import { TextField, Grid, withStyles } from '@material-ui/core';

const styles = {
    textField :{
        margin: '10px',
    },
    header: {
        width: '500px',
    },
    textLabel: {
        fontWeight: 'bold',
        paddingRight: '20px',
    }
  };

function CakeAddInput (props) {
    const { classes, styleProp } = props;
    const styleInput = styleProp ==="header" ? classes.header : classes.textField;
    const styleJustify = styleProp ==="header" ? 'center' : 'space-between'; 
    
    return (
        <Grid container justify={styleJustify} alignItems='center' wrap='wrap'>

            <div className={classes.textLabel}>{props.label}</div>
            
            <TextField 
                onChange = {props.onHandleCakeChange}
                value = {props.value}
                name = {props.name}
                variant='outlined'
                margin = 'dense'
                className={styleInput}
                disabled = {props.disabled}
                style = {props.styleDirect}
                multiline = {props.multiline}
                rows={props.rows}
                type={props.type}
                error={props.error}
                helperText={props.error && "Pole jest wymagane"}
            />

        </Grid>
        
    )
}

export default withStyles(styles)(CakeAddInput); 




