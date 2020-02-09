import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, withStyles, } from '@material-ui/core';
import {SORTOPTIONS} from '../../constans/selectConstans'
import clsx from 'clsx';

const styles = {
    root: {
        '& .MuiSelect-select': {
            backgroundColor: 'white',
        },
        '& .MuiInputBase-root': {  
            borderRadius: '20px',
        },
    },

    formControl: {
      margin: 2,
      minWidth: 120,
      width: '100%',
      borderRadius: '20px',
    },

  };


function FilterSelect (props) {
    
const {classes} = props;
    
    return( <div>
        <FormControl variant="outlined" 
                    className={clsx(classes.root, classes.formControl)}
                    color='secondary'
                    margin='dense'
        >
            <InputLabel id="select-outlined-label">
                sortowanie
            </InputLabel>
            <Select
                labelId="select-outlined-label"
                id="select-outlined"
                value={props.sortById}
                onChange={props.onHandleSortBy}
                labelWidth={70}
                >
                    {SORTOPTIONS.map(option => (
                            <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
                        ))    
                    }
            </Select>
        </FormControl>
        
        </div>
    )
}




export default withStyles (styles)(FilterSelect);

