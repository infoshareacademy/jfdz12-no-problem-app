import React from 'react';
import { Grid, FormControl, MenuItem, Select, withStyles, Typography, InputLabel, } from '@material-ui/core';
import clsx from 'clsx';
import Crop32Icon from '@material-ui/icons/Crop32';

const styles = {
    root: {
        '& .MuiSelect-select': {
            backgroundColor: 'white',
        },
    },

    formControl: {
      margin: '10px',
      minWidth: '206px',
      width:'100%,'
    },
    textLabel: {
        fontWeight: 'bold',
        paddingRight: '20px',
    },

  };


function CakeAddTypesSelect (props) {
    
const {classes, types} = props;
    
    return( 
        <Grid container justify='space-between' alignItems='center'>

            <div className={classes.textLabel}>{props.label}</div>
            
            <FormControl variant="outlined" 
                        className={clsx(classes.root, classes.formControl)}
                        margin='dense'
                        error={props.error}
            >
                {props.error &&<InputLabel htmlFor="labelid">Pole jest wymagane</InputLabel>}
                <Select
                    name = {props.name}
                    value = {props.value}
                    onChange = {props.onHandleCakeChange}
                    labelid='labelid'
                    labelWidth={props.error ? 130 : 0}
                >
                    <MenuItem key={-1} value={-1}>
                        <Typography variant="inherit" style={{display: 'flex', alignItems:'center'}}>
                            <Crop32Icon style={{paddingRight:'10px'}}/> 
                            brak
                        </Typography>
                        
                    </MenuItem>
                    {types.map(type => (
                        <MenuItem key={type.id} 
                                    value={type.id}
                        >                              
                            <Typography variant="inherit" style={{display: 'flex', alignItems:'center', fontSize: '14px'}}>
                                <Crop32Icon style ={{color:type.color, paddingRight:'10px' }} /> 
                                {type.name}
                            </Typography>
                        </MenuItem>
                        ))    
                    }
                </Select>
            </FormControl>
        </Grid>
    
    )
}

export default withStyles (styles)(CakeAddTypesSelect);
