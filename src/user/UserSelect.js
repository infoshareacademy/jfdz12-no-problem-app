import React from 'react';
import { Grid, FormControl, InputLabel, MenuItem, Select, Typography,} from '@material-ui/core';

export function UserSelect (props) {

const { options} = props;

    return( 
        <Grid container justify='space-between' alignItems='center'>

            <FormControl variant="outlined" 
                        style={{width:'100%'}}
            >
                <InputLabel id="userIdselect">wybierz użytkownika </InputLabel>
                <Select
                    labelId = "userIdselect"
                    name = {props.name}
                    value = {props.value}
                    onChange = {props.onHandleChange}
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
                                    {option.name} {option.surname} 
                                </Typography>
                            </MenuItem>
                            ))    
                        }
                </Select>

                 
            </FormControl>
        </Grid>
    
    )
}
