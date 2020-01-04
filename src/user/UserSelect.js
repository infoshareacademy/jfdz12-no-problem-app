import React from 'react';
import { Grid, FormControl, InputLabel, MenuItem, Select, withStyles, Typography,} from '@material-ui/core';
import clsx from 'clsx';

const styles = {
    root: {
        '& .MuiSelect-select': {
  //          backgroundColor: 'white',
        },
    },

    formControl: {
    //  margin: '5px',
    },
    textLabel: {
        fontWeight: 'bold',
        paddingRight: '20px',
    },

  };


function UserSelect (props) {
console.log('userselect',props)
const {classes, options} = props;

    return( 
        <Grid container justify='space-between' alignItems='center'>

            <FormControl variant="outlined" 
                        className={clsx(classes.root, classes.formControl)}
                        style={{width:'100%'}}
            >
                <InputLabel id="userIdselect">wybierz użytkownika </InputLabel>
                <Select
                    labelId = "userIdselect"
                    name = {props.name}
                    value = {props.value}
                    onChange = {props.onHandleUserChange}
                    labelWidth={130}
                    >
                        <MenuItem >
                            <em>Brak</em>
                        </MenuItem>
                        {options.map(option => (
                            <MenuItem key={option.id} 
                                        value={option.id}
                            >
                                <Typography variant="inherit" 
                                            style={{paddingBottom:'5px'}}
                                >
                                    {option.name} {option.surname} {option.contact.mail}
                                </Typography>
                            </MenuItem>
                            ))    
                        }
                </Select>

                 
            </FormControl>
        </Grid>
    
    )
}

export default withStyles (styles)(UserSelect);
