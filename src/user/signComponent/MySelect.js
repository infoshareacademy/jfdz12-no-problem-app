import React from 'react';
import { InputLabel, FormControl, MenuItem, Select, Typography,} from '@material-ui/core';


export default function MySelect (props) {
    
const {options, name, value, label, align, width, labelWidth} = props;
    
    return( 
      
        <FormControl 
            variant="outlined" 
            style={{margin: '20px 0px', width: width}}        
        >
            <InputLabel id="select-label">{label}</InputLabel>
            <Select
                labelId = "select-label"
                name = {name}
                value = {value}
                onChange = {props.onHandleChange}
                labelWidth = {labelWidth}
                style={{textAlign:align}}    
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
    )
}

