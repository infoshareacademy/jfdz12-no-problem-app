import React from 'react';
import { Grid, FormControl, MenuItem, Select, withStyles, ListItemIcon, Typography,} from '@material-ui/core';
import clsx from 'clsx';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

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
            >
                <Select
                    name = {props.name}
                    value = {props.value}
                    onChange = {props.onHandleCakeChange}
                    >
                        <MenuItem key={0} value={0}>
                            <ListItemIcon>
                                <FiberManualRecordIcon fontSize="small" />
                            </ListItemIcon>
                            <em>Brak</em>
                        </MenuItem>
                        {types.map(type => (
                            <MenuItem key={type.id} 
                                        value={type.id}
                            >
                                <ListItemIcon style={{color:type.color}}>
                                    <FiberManualRecordIcon />
                                </ListItemIcon>
                                <Typography variant="inherit" style={{paddingBottom:'5px'}}>{type.name}</Typography>
                            </MenuItem>
                            ))    
                        }
                </Select>
            </FormControl>
        </Grid>
    
    )
}

export default withStyles (styles)(CakeAddTypesSelect);
