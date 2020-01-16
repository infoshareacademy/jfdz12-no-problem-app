import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import clsx from 'clsx';
import { TextField, withStyles, } from '@material-ui/core';

const styles = {

  root: {
        '& .MuiSelect-root': {
            minWidth: '0px',
        },
        '& .MuiInputBase-root': {  
            borderRadius: '20px',
        },
    },

    formControl: {
        minWidth: '100px',
        maxWidth: '235%',
        flex: '1 1',
    },
}


function FilterDropdown (props) {
   
    const { classes } = props;
    return <>
        <Autocomplete
            className={clsx(classes.formControl, classes.root)}
            onChange = {(event,value)=>props.onHandleChangeType(event,value)}
            multiple
            id="size-small-outlined-multi"
            size="small"
            options={props.types}
            getOptionLabel={option => option.name}
            renderInput={params => (
            <TextField
                {...params}
                variant="outlined"
                label="Typ ciasta"
                placeholder="szukaj"
                color='secondary'
                fullWidth
            />
            )}
        />
    </>
}

export default withStyles(styles)(FilterDropdown);