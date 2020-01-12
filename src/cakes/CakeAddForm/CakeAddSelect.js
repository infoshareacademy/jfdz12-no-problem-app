import React from 'react';
import { Grid, FormControl, MenuItem, Select, withStyles, Typography,} from '@material-ui/core';
import clsx from 'clsx';

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


function CakeAddSelect (props) {
    
const {classes, options} = props;
    
    return( 
        <Grid container justify='space-between' alignItems='center'>

            <div className={classes.textLabel}>{props.label}</div>
            
            <FormControl variant="outlined" 
                        className={clsx(classes.root, classes.formControl)}
                        margin='dense'
            >
                <Select
                    name = {props.name}
                    value = {props.value}
                    onChange = {props.onHandleCakeChange}
                    >
                        <MenuItem >
                            <em>Brak</em>
                        </MenuItem>
                        {options.map(option => (
                            <MenuItem key={option.id} 
                                        value={option.value}
                            >
                                <Typography variant="inherit" >
                                    {option.name}
                                </Typography>
                            </MenuItem>
                            ))    
                        }
                </Select>
            </FormControl>
        </Grid>
    
    )
}

export default withStyles (styles)(CakeAddSelect);
